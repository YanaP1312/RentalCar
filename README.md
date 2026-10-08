# 🚗 RentalCar

A web application for the **RentalCar** company, designed to provide users with an intuitive interface to browse, filter, and rent cars online. Built using **React + Redux**, this app interacts with a ready-to-use API backend.

> 💡 Try the app live: [https://rental-car-red-nu.vercel.app]

<img width="1920" height="1093" alt="РенталКар1" src="https://github.com/user-attachments/assets/bde18376-12c8-4bb9-81eb-d11dd085ee27" />
<img width="1920" height="1090" alt="Рентал Кар2" src="https://github.com/user-attachments/assets/69250f17-51a3-45a5-96ca-fa2be4aed799" />
<img width="1280" height="1135" alt="РенталКар3" src="https://github.com/user-attachments/assets/0aa7d6f6-d0b8-434a-acf6-7f66f5243684" />

---

## 📋 Project Overview

RentalCar allows users to:

- View a catalog of available rental cars
- Filter vehicles by brand, price, and mileage
- View detailed pages for each car
- Add cars to **Favorites** (persistent across sessions)
- Share filtered search results via URL query parameters
- Book a car directly from its details page

---

## 🔧 Tech Stack

- **React** (with Vite bundler)
- **Redux** + Redux Toolkit for global state management
- **React Router** for routing
- **Axios** for API requests
- **CSS Modules** for styling
- **React Spinners** for loading indicators
- **React Select** for selects
- **React Datepicker** for calendar

---

## 📁 Pages & Routes

| Route          | Description                                        |
| -------------- | -------------------------------------------------- |
| `/`            | Home page with hero/banner section                 |
| `/catalog`     | Catalog with filterable list of cars and favorites |
| `/catalog/:id` | Single car page with full details & booking        |

---

## 🔍 Filtering System

Filtering is **backend-driven** and includes:

- **Brand** – one selectable car brand
- **Price** – hourly rental rate
- **Mileage** – range: "from" and "to"

> Filtering updates are reflected in the **URL** as query parameters, enabling link sharing and session persistence.

---

## ❤️ Favorites

- Users can mark cars as favorites by clicking the heart icon
- Favorites are stored in **localStorage**, and persist on reload
- "Show Favorites" toggle available on the catalog page

---

## 📦 Backend API

This app consumes data from a public car rental API:

📎 **API Docs**: [https://car-rental-api.goit.global/api-docs/.]

---

## 📸 UI & Design

- Mobile-first layout based on provided Figma design
- Clean, modular component structure

---

## 🔄 Pagination

- Backend-powered pagination with a **"Load More"** button
- Works seamlessly with active filters

---

## 📩 Booking Form

On the car detail page:

- A form allows users to fill out their rental info
- On successful submission, a notification appears

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/rental-car-app.git
cd rental-car-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

## 📦 Build for Production

```bash
npm run build
```
