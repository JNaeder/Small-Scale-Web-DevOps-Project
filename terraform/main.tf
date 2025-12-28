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
  }
}

variable "digitalocean_api_key" {}
variable "digitalocean_ssh_public_key" {}
variable "digitalocean_domain_name" {}

provider "digitalocean" {
  token = var.digitalocean_api_key
}

resource "digitalocean_ssh_key" "ssh-key" {
    name = "terraform-key"
    public_key = var.digitalocean_ssh_public_key
}

resource "digitalocean_droplet" "main" {
    name = "small-scall-vm"
    size = "s-1vcpu-512mb-10gb"
    image = "ubuntu-25-10-x64"
    region = "nyc3"
    ssh_keys = [digitalocean_ssh_key.ssh-key.id]
}

resource "digitalocean_firewall" "ssh-http" {
  name = "ssh-and-http"
  droplet_ids = [digitalocean_droplet.main.id]
  
  inbound_rule {
    protocol = "tcp"
    port_range = "22"
    source_addresses = ["0.0.0.0/0"]
  }

  inbound_rule {
    protocol = "tcp"
    port_range = "80"
    source_addresses = ["0.0.0.0/0"]
  }

  inbound_rule {
    protocol = "icmp"
    source_addresses = ["0.0.0.0/0"]
  }

  outbound_rule {
    protocol = "tcp"
    port_range = "1-65535"
    destination_addresses = ["0.0.0.0/0"]
  }

  outbound_rule {
    protocol = "udp"
    port_range = "1-65535"
    destination_addresses = ["0.0.0.0/0"]
  }

  outbound_rule {
    protocol = "icmp"
    destination_addresses = ["0.0.0.0/0"]
  }

}


resource "digitalocean_project" "small-scale-devops-project" {
    name = "Small Scale DevOps Project"
    environment = "Production"
    resources = [ digitalocean_droplet.main.urn ]
}

resource "digitalocean_domain" "default" {
  name = var.digitalocean_domain_name
  ip_address = digitalocean_droplet.main.ipv4_address
  
}

output "public_ip" {
  value = digitalocean_droplet.main.ipv4_address
}