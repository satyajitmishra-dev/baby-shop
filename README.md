# Baby Shop - E-Commerce Platform 👶🛒

A modern, full-stack E-Commerce solution for baby care products, built with **Django (Backend)** and **React (Frontend)**. This project features a robust REST API, secure authentication, and a responsive premium user interface.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Tech Stack

### Backend
-   **Framework**: Django 5.x + Django REST Framework
-   **Database**: PostgreSQL (Production) / SQLite (Dev)
-   **Authentication**: JWT (Simple JWT)
-   **API**: RESTful architecture

### Frontend
-   **Framework**: React 19 + Vite
-   **State Management**: Redux Toolkit
-   **Styling**: Tailwind CSS
-   **HTTP Client**: Axios

---

## 🛠️ Installation & Setup

### Prerequisites
-   Python 3.10+
-   Node.js 18+
-   PostgreSQL (optional, for local prod-like setup)

### 1. Backend Setup
```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure Environment Variables
# Rename .env.example to .env and update details
cp .env.example .env

# Run Migrations
python manage.py migrate

# Seed Data (Optional)
python populate_db.py

# Start Server
python manage.py runserver
```
Backend runs at: `http://localhost:8000`

### 2. Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start Dev Server
npm run dev
```
Frontend runs at: `http://localhost:5173`

---

## 🔑 Key Features
-   **User Authentication**: Secure Sign Up & Login.
-   **Product Catalog**: Filter by category, sort by price/newest.
-   **Shopping Cart**: Persisted cart state, complex quantity logic.
-   **Order System**: Transactional order creation with stock validation.
-   **Responsive Design**: Optimized for Mobile & Desktop.

---

## 🌍 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/token/` | Obtain Access/Refresh Token |
| `GET` | `/api/products/` | List all products (with filters) |
| `GET` | `/api/products/:id/` | Get product details |
| `POST` | `/api/orders/` | Create a new order |

---

## ☁️ Deployment
This project is configured for deployment on **Render**.
-   **Backend**: Deployed as a Web Service (Gunicorn).
-   **Frontend**: Deployed as a Static Site.

See the `deploy_guide.md` in the `brain` folder for detailed steps.

---
**Author**: Satyajit Mishra
