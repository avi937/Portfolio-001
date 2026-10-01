# 🌐 Avi Arora — DevOps & Cloud Engineering Portfolio

[![Live Status](https://img.shields.io/badge/Status-Production_Ready-success?logo=statuspage&logoColor=white)](#)
[![Deployment](https://img.shields.io/badge/Hosted_on-Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5_|_CSS3_|_JavaScript-blue)](#)
[![License](https://img.shields.io/badge/License-MIT-green)](#)

A high-performance, modern, and responsive personal portfolio website showcasing multi-cloud DevOps engineering projects, RHCSA certification credentials, infrastructure metrics, and production architecture case studies.

---

## 🚀 Key Features

- **Cybernetic Dark Aesthetic:** Sleek glassmorphism, animated glow highlights, and modern typography (Plus Jakarta Sans & JetBrains Mono).
- **Interactive DevOps Hacker Terminal:** Live simulated terminal displaying production AWS multi-cloud metrics, ASG telemetry, and Cloudflare Zero Trust auditing.
- **100% Mobile Responsive:** Fluid scaling across all smartphones, tablets, and wide monitors with dedicated hamburger drawer navigation.
- **Project Showcases:** Real-world case studies including Multi-AZ ASG & ALB, Production Multi-AZ VPC, and Zero-Downtime Azure-to-AWS ECS Fargate migration.
- **Direct Resume Download:** Embedded one-click PDF resume download link.
- **Lightweight & Blazing Fast:** Pure Vanilla HTML5, CSS3, and JavaScript with 0 heavy frameworks or external dependencies.

---

## 🛠️ Local Development & Preview

To preview the portfolio locally on your machine:

```powershell
# Open in your default browser directly
Start-Process "index.html"
```

Or run a lightweight HTTP dev server:
```powershell
# Using Python
python -m http.server 8080

# Or using Node.js / npx
npx serve .
```

---

## ⚡ Free Hosting on Cloudflare Pages (Step-by-Step)

Cloudflare Pages provides 100% free hosting with unlimited bandwidth, global CDN caching, automatic SSL certificates, and zero configuration for static sites.

### Method 1: Connecting via GitHub (Recommended — Auto Deploy on `git push`)
1. Create a new repository on your GitHub account (e.g. `avi937/portfolio`).
2. Push this folder to your repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of personal DevOps portfolio"
   git branch -M main
   git remote add origin https://github.com/avi937/portfolio.git
   git push -u origin main
   ```
3. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
4. Navigate to **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
5. Select your `portfolio` repository.
6. Build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `.` or `/` *(root folder)*
7. Click **Save and Deploy**. Your site will be live immediately with a free `*.pages.dev` URL and auto-deploy on every commit!

### Method 2: Direct Upload (No Git Required)
1. In Cloudflare Dashboard, go to **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Upload assets**.
2. Drag and drop this `portfolio` folder directly into the browser.
3. Click **Deploy**.

---

## 📄 License

MIT © [Avi Arora](https://linkedin.com/in/avi-arora-a68775232)
