#!/bin/bash
set -e

echo "=== 1/5 Installing Node.js 20 ==="
if ! command -v node &> /dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi
echo "Node: $(node -v) | npm: $(npm -v)"

echo "=== 2/5 Installing Nginx ==="
sudo apt-get update -y
sudo apt-get install -y nginx

echo "=== 3/5 Building the project ==="
cd ~/mwasalat_turmet
npm ci
npm run build

echo "=== 4/5 Deploying to /var/www/dev.mwasalat.ae ==="
sudo mkdir -p /var/www/dev.mwasalat.ae
sudo rsync -av --delete dist/ /var/www/dev.mwasalat.ae/
sudo rsync -av public/ /var/www/dev.mwasalat.ae/

echo "=== 5/5 Configuring Nginx ==="
sudo tee /etc/nginx/sites-available/dev.mwasalat.ae > /dev/null <<'NGINX'
server {
    listen 80;
    server_name dev.mwasalat.ae;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name dev.mwasalat.ae;

    ssl_certificate     /etc/ssl/mwasalat/fullchain.pem;
    ssl_certificate_key /etc/ssl/mwasalat/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    root /var/www/dev.mwasalat.ae;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:; frame-src https://www.google.com https://www.youtube.com; connect-src 'self';" always;

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    gzip_min_length 256;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|mp4|webm)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # SPA: all routes fall back to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
NGINX

sudo ln -sf /etc/nginx/sites-available/dev.mwasalat.ae /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

echo ""
echo "=== DONE! ==="
echo "Site is live at: https://dev.mwasalat.ae"
