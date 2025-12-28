output "vm_public_ip" {
  value = digitalocean_droplet.main.ipv4_address
}

output "cockroach_url" {
    sensitive = true
    value = data.cockroach_connection_string.cockroach.connection_string
}