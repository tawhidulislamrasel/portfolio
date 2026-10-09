# 🚀 Cinematic 3D Senior Software Engineer Portfolio & CMS

A premium, interactive digital experience and full-stack portfolio built for a **Senior Software Engineer & Engineering Team Lead**. Designed with **Laravel 12**, **SQLite**, **Three.js (WebGL 3D Engine)**, **GSAP + ScrollTrigger**, **Tailwind CSS v4**, and **Blade**.

---

## 🌟 Key Features & Architecture

- **🌌 Real Interactive 3D WebGL Scenes:** Custom Three.js particle systems, volumetric lighting, and mouse-parallax camera movement.
- **📝 Full Dynamic Blog & Articles CMS:** Complete publishing engine with markdown support, tags, category filters, and draft/published statuses (`/blog` and `/admin/posts`).
- **🎨 Live Design Tokens & Theme Customizer:** Flat UI US American Color Palette (`#0984e3`, `#00cec9`, `#6c5ce7`, `#2d3436`, `#1e272e`, `#dfe6e9`) with live CSS variable overrides.
- **🖼️ 100% Dynamic Branding & Asset Storage:** Upload site logo, browser favicon, personal profile portrait, and case study screenshots directly from your PC into local storage (`/storage/...`).
- **📱 Fully Mobile Responsive:** Custom mobile dropdown menu for public visitors and off-canvas sliding sidebar drawer for admin panel users.
- **🛡️ Secure Admin Control Panel (`/admin`):** Protected dashboard, activity logging, anti-spam honeypot contact inbox, and CRUD management for all portfolio entities.
- **⚡ Vercel Deployment Ready:** Out-of-the-box support for Vercel Serverless Functions (`vercel.json` and `api/index.php`).
- **🧪 100% Automated Test Suite:** Unit & Feature test coverage (`php artisan test`).

---

## 🛠️ Technology Stack

- **Backend Framework:** Laravel 12 (PHP 8.2+)
- **Database Engine:** SQLite (`database/database.sqlite`)
- **Frontend Styling:** Tailwind CSS v4 & Lucide Icons
- **3D Engine:** Three.js (WebGL Shaders & Particles)
- **Animation & Motion:** GSAP & ScrollTrigger
- **Asset Bundler:** Vite
- **Automated Testing:** Pest / PHPUnit (`php artisan test`)

---

## 💻 Local Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/tawhidulislamrasel/portfolio.git
   cd portfolio
   ```

2. **Install PHP & Node Dependencies:**
   ```bash
   composer install
   npm install
   ```

3. **Configure Environment:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Initialize Database & Seed Data:**
   ```bash
   php artisan migrate:fresh --seed
   php artisan storage:link
   ```

5. **Build Frontend Assets:**
   ```bash
   npm run build
   ```

6. **Start Local Development Server:**
   ```bash
   php artisan serve
   ```
   Access the app at: `http://127.0.0.1:8000`

---

## 🔐 Admin Panel Credentials

- **URL:** `http://127.0.0.1:8000/admin/login`
- **Email:** `admin@example.com`
- **Password:** `password`

---

## ⚡ Deployment to Vercel

This repository includes pre-configured Vercel serverless runtime settings (`vercel.json`, `.vercelignore`, and `api/index.php`).

### Step-by-Step Vercel Deployment:

1. **Push Code to GitHub:**
   Ensure your latest code is pushed to your GitHub repository (`tawhidulislamrasel/portfolio`).

2. **Import Project into Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) -> **Add New Project**.
   - Select your `portfolio` GitHub repository.

3. **Set Environment Variables in Vercel:**
   In Vercel -> Project Settings -> **Environment Variables**, add:
   - `APP_KEY` = *(Your generated 32-character base64 key from `php artisan key:generate`)*
   - `APP_ENV` = `production`
   - `APP_DEBUG` = `false`
   - `APP_URL` = `https://your-domain.vercel.app`
   - `DB_CONNECTION` = `sqlite`
   - `VIEW_COMPILED_PATH` = `/tmp`
   - `CACHE_STORE` = `array`
   - `SESSION_DRIVER` = `cookie`

4. **Deploy:**
   Click **Deploy**. Vercel will automatically build the assets and launch your serverless Laravel portfolio live!

---

## 📄 License

Developed under the MIT License.
