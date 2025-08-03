# Swaraj Phalke - Software Intern Assignment - Multi-Theme Switcher App

## 🌐 Live Demo
[https://theme-switcher-plum.vercel.app/]  
 
---

## 📁 Folder Structure
public/ 
src/
├── components/
│ └── Header.tsx
├── context/
│ └── ThemeContext.tsx
├── pages/
│ ├── Home.tsx
│ ├── About.tsx
│ └── Contact.tsx
├── styles/
│ └── themes.ts
├── App.tsx
├── index.tsx
├── index.css
.gitignore
README.md
package.json
tailwind.config.js
tsconfig.json

---

## 🚀 Project Overview

This is a **React + TypeScript** web app that allows users to switch between **three visually distinct themes** using a dropdown in the header. Each theme affects:

- Colors  
- Fonts  
- Layout  
- Spacing  

The selected theme is **persisted** using `localStorage`.

---

## 🎯 Features

- ⚙️ **Three Custom Themes:**
  - **Theme 1 (Default):** Light, minimalist, sans-serif
  - **Theme 2:** Dark mode, sidebar layout, bold serif font
  - **Theme 3:** Colorful card-grid layout, playful font (`Pacifico`)
  
- 📄 **Multi-page Routing:** (React Router)
  - `/` – Home
  - `/about` – About
  - `/contact` – Contact

- 🌐 **API Integration:**
  - Fetched product data from: [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

- 🎨 **Fully Responsive Design**
  - Works on mobile and desktop devices

- 🧠 **Context API for Theme Management**
- 💾 **Theme Persistence using localStorage**
- 🔐 **Basic Security Best Practices**
- 🎥 **Subtle Animations for Theme Switch**
- 💅 Built with **Tailwind CSS** for styling

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite or CRA) + TypeScript
- **State Management:** React Context API
- **Styling:** TailwindCSS
- **Routing:** React Router DOM
- **API:** FakeStoreAPI
- **Font:** Google Fonts (e.g., `Pacifico`)

---

## 🧪 How to Run Locally

### Prerequisites:
- Node.js and npm installed

### Steps:
```bash
git clone https://github.com/your-username/multi-theme-switcher-app.git
cd multi-theme-switcher-app
npm install
npm start
```
### Submission Info
GitHub Repo: https://github.com/your-username/multi-theme-switcher-app
Job Role: Software Interface Engineer
Submitted to: Hipster Pte. Ltd.
Deadline: Aug 4, 10:00 AM IST

