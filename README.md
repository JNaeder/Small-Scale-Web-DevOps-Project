# Small Scale Test Project

This project is intended to show a full DevOps workflow for a basic webapp. This is for practice, and to gain an understanding of all the parts involved.

### --- Plan ---

The plan is to have

- Frontend: React (TailwindCSS)
- Backend: Python (FastAPI)
- Database: CockroachDB
- IaC: Terraform
- Cloud: DigitalOcean

Terraform:
need terraform.tfvars file with:

- digitalocean_ssh_public_key
- digitalocean_api_key
- digitalocean_domain_name
- cockroach_db_api_key
- cockroach_sql_user_password
