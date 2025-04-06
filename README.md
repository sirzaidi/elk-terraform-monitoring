Assignment 3: ELK Stack Deployment with Terraform & New Relic

Student Info
- Name: Mahdi Zaidi  
- Student ID: 24233097
- Date Submitted: April 6, 2025  
- GitHub Repository: https://github.com/sirzaidi/elk-terraform-monitoring

Overview
This project demonstrates automated infrastructure provisioning and log monitoring using:
- 🧱 Terraform – to provision a GCP VM instance
- 🐳 Docker Compose – to deploy an ELK Stack (Elasticsearch, Logstash, Kibana)
- 🖥️ A simple Node.js backend app that logs messages
- 📈 New Relic APM – to monitor app performance and metrics

Project Structure
elk-app/ ├── backend/ │ ├── app.js # Node.js app that logs to STDOUT │ ├── Dockerfile # Backend Dockerfile (with New Relic agent) │ ├── newrelic.js # New Relic configuration ├── docker-compose.yml # Defines and runs ELK + backend containers ├── logstash.conf # Logstash pipeline config ├── logs/ # Log file volume (used for file-based testing) ├── README.md └── Lab5/ # Terraform configuration ├── main.tf ├── variables.tf ├── outputs.tf └── Terraform.tfvars

How to Run

1. Provision the VM with Terraform
*In bash
cd Lab5
terraform init
terraform apply

Output will show:
•	External IP of the instance
•	Instance name and zone

2. SSH into the VM
ssh ubuntu@146.148.60.251

3. Deploy ELK Stack and Backend
cd elk-app
sudo docker-compose up -d –build

4. Access the Following:
Kibana UI	 http://146.148.60.251/:5601
Elasticsearch	http://146.148.60.251/:9200
Backend App	http://146.148.60.251/:3000

5. Note:
•	service-account-key.json is excluded via .gitignore
•	Backend logs are ingested securely using Logstash
•	Port restrictions are handled via GCP firewall rules
 

