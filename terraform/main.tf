terraform {
  cloud {
    organization = "jnaeder"
    workspaces {
      name = "small-scale-devops"
    }
  }
  required_providers {
    digitalocean = {
        source = "digitalocean/digitalocean"
        version = "2.68.0"
    }
    cockroach = {
      source = "cockroachdb/cockroach"
      version = "1.17.0"
    }
  }
}



provider "digitalocean" {
  token = var.digitalocean_api_key
}

provider "cockroach" {
  apikey = var.cockroach_db_api_key
}


