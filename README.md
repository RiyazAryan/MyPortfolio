# 🚀 Shaik Riyaz Basha — Developer Portfolio

This is my personal portfolio built using **Vite + React + TypeScript**, styled with **Tailwind CSS**, and powered by **Google Sheets + Zapier** for dynamic data and secure contact handling.

## ✨ Features

- 🎯 Dynamic data from Google Sheets (Projects, Skills, Certifications, etc.)
- 🌗 Dark mode support
- 🧠 Skills grouped by category with animated UI
- 📬 Contact form integrated with Zapier (no exposed database)
- 📱 Responsive design
- ⚡ Smooth scrolling and animated sections

---

## ⚙️ Setup Instructions

1. **Install dependencies**
```bash
npm install
```

Create a .env file in the root directory:

VITE_BASE_URL=https://opensheet.elk.sh/your-sheet-id
VITE_ZAPIER=https://hooks.zapier.com/hooks/catch/your-hook-id/

Add your profile image

Place your profile picture in:

/public/images/your-image.jpg

Run locally

npm run dev

To build for production:

npm run build
