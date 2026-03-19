# GigShield AI

### AI-Powered Parametric Insurance for Gig Workers

Production-ready platform for protecting gig workers’ income using **Google OAuth2, Spring Security sessions, Redis-backed session storage, MySQL persistence, React frontend, and AI-powered risk modeling using Groq (Meta LLaMA)**.

---

# 🚀 Project Overview

GigShield AI is an **AI-powered parametric insurance platform** designed to protect gig workers (Swiggy, Zomato, Amazon, etc.) from **income loss due to environmental disruptions** such as:

* Heavy rain
* Floods
* Heatwaves
* Air pollution
* Natural disasters

Unlike traditional insurance, GigShield uses:

* **Automated event detection**
* **AI-based risk prediction**
* **Instant claim payouts (no manual claims)**

---

# 📌 Task 1 Scope (Current Implementation)

This version includes:

* Google OAuth2 Login
* Session-based authentication (NO JWT)
* Redis-backed session storage
* User onboarding & profile completion
* Subscription plans (weekly model)
* Dashboard
* Mock payment integration
* Base system architecture for AI integration

---

# 🔐 Authentication Architecture

This project uses **session-based authentication (HttpSession + Redis)**.

### Flow:

```text
User → Login with Google
↓
Spring Security OAuth2
↓
Session created on server
↓
Stored in Redis
↓
Session cookie sent to browser
↓
Axios sends cookie automatically
↓
Backend authenticates user
```

✔ No JWT used
✔ Secure cookie-based session
✔ Centralized session management

---

# 🧠 AI Integration (Core Innovation)

GigShield AI integrates **AI using Groq (Meta LLaMA models)** to make the system intelligent.

---

## 1️⃣ AI-Based Risk Prediction (Dynamic Pricing)

AI calculates the **risk score of a worker’s location** based on environmental conditions.

### Inputs:

* Rainfall forecast
* Temperature
* AQI (Air Quality Index)
* Historical disruption data
* Flood-prone zones

### Output:

```text
Risk Score: 0.2 → Low Risk
Risk Score: 0.6 → Medium Risk
Risk Score: 0.9 → High Risk
```

### Usage:

* Adjust weekly premium dynamically
* Suggest best plan to worker
* Predict future disruptions

---

## 2️⃣ AI Fraud Detection (Behavior Analysis)

AI detects fraudulent claims using behavioral analysis.

### Checks include:

* Worker location vs disruption zone
* GPS movement patterns
* Repeated claims from same user
* Activity mismatch detection

### Example:

```text
Worker claims rain disruption
BUT
No rainfall detected in zone
→ Claim rejected
```

---

## 3️⃣ AI Prompt Engine (Groq + LLaMA)

AI decisions are powered using:

* **Groq API**
* **Meta LLaMA models**

### Example prompt:

```text
Given:
Rainfall = 110mm
AQI = 320
Temperature = 38°C

Predict risk level and recommended premium.
```

AI response:

```text
Risk Level: High
Suggested Premium: ₹20/week
```

---

# 🧱 System Architecture

```text
                 React Frontend (Vite)
                         │
                         ▼
               Spring Boot Backend
                         │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
     MySQL DB        Redis Cache    AI Service
 (users,plans)     (sessions)     (Groq LLaMA)

                         │
                         ▼
                External Data APIs
     (Weather / AQI / Disaster Monitoring)
```

---

# ⚙️ Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router

### Backend

* Spring Boot (Gradle)
* Spring Security
* OAuth2 Google Login
* Spring Session (Redis)

### Database

* MySQL

### Cache

* Redis

### AI

* Groq API
* Meta LLaMA models

### DevOps

* Docker
* Docker Compose

---

# 📂 Folder Overview

* `Client/src/pages/Login.jsx`
* `Client/src/pages/Dashboard.jsx`
* `Client/src/pages/Profile.jsx`
* `Client/src/pages/Subscription.jsx`
* `Client/src/api/axiosClient.js`
* `server/config/SecurityConfig.java`
* `server/controller/UserController.java`
* `server/controller/SubscriptionController.java`
* `server/controller/PlanController.java`
* `database/schema.sql`

---

# 👤 User Flow

```text
Login with Google
↓
User created in database
↓
Session stored in Redis
↓
User lands on dashboard
↓
Complete profile
↓
Choose subscription plan
↓
System ready for AI-based protection
```

---

# 💳 Subscription Plans

| Plan     | Weekly Cost | Coverage |
| -------- | ----------- | -------- |
| Basic    | ₹10         | ₹200/day |
| Standard | ₹20         | ₹400/day |
| Premium  | ₹30         | ₹600/day |

---

# 📡 External APIs

* OpenWeather API → Weather data
* AQICN API → Air pollution
* USGS API → Earthquake data
* Groq API → AI predictions

(All APIs are free or mocked for development)

---

# 🗄 Database Schema

### Users

* id
* email
* name
* phone
* city
* delivery_platform
* vehicle_type
* aadhaar_last4
* profile_completed

### Plans

* id
* name
* weekly_price
* coverage_amount

### Subscriptions

* id
* user_id
* plan_type
* start_date
* end_date
* status

---

# 🧰 Redis Usage

* Session storage
* Session persistence
* Authentication management

---

# 🐳 Run with Docker

```bash
docker compose up --build
```

Reset database if needed:

```bash
docker compose down -v
docker compose up --build
```

---

# 🌐 Services

* Frontend → http://localhost:5173
* Backend → http://localhost:8080
* MySQL → localhost:3307
* Redis → localhost:6379

---

# 🔮 Future Enhancements

* Real-time event monitoring
* Automatic claim triggering
* Instant payout integration
* Risk heatmap visualization
* Mobile app support

---

# 🏆 Innovation Highlights

* AI-powered insurance pricing
* Zero-touch claim system
* Fraud detection using behavior analysis
* Session-based secure authentication
* Scalable microservice-ready architecture

---

# 👨‍💻 Built For

Guidewire DEVTrails Hackathon 2026

Designed to protect the livelihoods of India’s gig workers using AI-driven insurance.
