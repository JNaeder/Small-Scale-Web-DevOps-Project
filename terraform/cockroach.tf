resource "cockroach_cluster" "cluster" {
    name = "small-scale-devops-cluster"
    plan = "BASIC"
    cloud_provider = "GCP"
    serverless = {}
    regions = [ {
      name = "us-east1"
    } ]
}

resource "cockroach_database" "database" {
    cluster_id = cockroach_cluster.cluster.id
    name = "small-scale-devops-database"
}

resource "cockroach_sql_user" "sql_user" {
    name = "sql-user"
    password = var.cockroach_sql_user_password
    cluster_id = cockroach_cluster.cluster.id
}

data "cockroach_connection_string" "cockroach"{
    id = cockroach_cluster.cluster.id
    sql_user = cockroach_sql_user.sql_user.name
    password = var.cockroach_sql_user_password
    database = cockroach_database.database.name
}
