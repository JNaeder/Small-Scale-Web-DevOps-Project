terraform {
  required_providers {
    digitalocean = {
        source = "digitalocean/digitalocean"
        version = "2.68.0"
    }
  }
}

variable "digitalocean-api-key" {}
variable "digitalocean-ssh-public-key" {
  
}

provider "digitalocean" {
  token = var.digitalocean-api-key
}

resource "digitalocean_ssh_key" "ssh-key" {
    name = "terraform-key"
    public_key = var.digitalocean-ssh-public-key
  
}

resource "digitalocean_droplet" "main" {
    name = "small-scall-vm"
    size = "s-1vcpu-512mb-10gb"
    image = "ubuntu-25-10-x64"
    region = "nyc3"
    ssh_keys = [digitalocean_ssh_key.ssh-key.id]
}

resource "digitalocean_project" "small-scale-devops-project" {
    name = "Small Scale DevOps Project"
    environment = "Production"
    resources = [ digitalocean_droplet.main.urn ]
}