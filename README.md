

# Getting Started

#### STEP1 - Login to AWS console and create EC2 instance
#### STEP2 - Setup GitHub Repo and Push your project
#### STEP3 - Login to EC2 instance
#### STEP4 - Setup GitHub Action runner on EC2 instance
Go to setting inside setting there is actions option in it go in runners then create new self hosted runner and add all commands given in it inside your aws console
#### STEP5 - Create GitHub Secrets for managing environment variables
Go to setting inside setting there is secrets and variable option in it go in runners and create repository secrets
#### STEP6 - Create CI/CD Workflow using GitHub Action
Go to actions select nodejs image inside ci/cd anfd create yml file

## Installation

Update all packages
```bash
sudo apt update
```

Install my-project with npm

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

#### Step 7 - Install nodejs and nginx on EC2 instance

Install nodejs in aws console

```bash
sudo apt-get install -y nodejs
```

Install nginx in aws console

```bash
sudo apt-get install -y nginx
```

#### Step 8 - Install pm2

```bash
sudo npm i -g pm2
```


#### Step 9 - Config nginx and restart it

```bash
cd /etc/nginx/sites-available
sudo nano default
```

Add code in default file

```bash
location /api {
	rewrite ^\/api\/(.*)$ /api/$1 break;
	proxy_pass  http://localhost:5000;
	proxy_set_header Host $host;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

After Changes type this code to restart nginx

```bash
sudo systemctl restart nginx
```

#### Step 10 - Run backend api in the background as a service using pm2

```bash
pm2 start server.js --name=BackendAPI
```

#### Step 11 - Add the command in yml script of project in github to restart the nodejs api server after every push to the repo

```bash
run: pm2 restart BackendAPI
```










