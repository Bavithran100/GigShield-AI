# GigShield AI

### AI-Powered Parametric Insurance for India's Gig Workers

---

## 📌 Problem

India's gig economy workers (Zomato, Swiggy, Amazon, Zepto delivery partners) depend on **daily earnings**.

External disruptions such as:

* Heavy rain
* Floods
* Heatwaves
* High air pollution
* Curfews

can reduce their income by **20–30%**.

Currently, these workers **have no automated financial protection** against such uncontrollable events.

---

## 🚀 Solution

GigShield AI provides an **AI-powered parametric insurance platform**.

Workers subscribe to a **weekly insurance plan**.
When predefined disruption conditions occur, the system automatically:

1. Detects the event
2. Verifies worker location
3. Checks active insurance policy
4. Creates a claim
5. Sends instant payout

No manual claim submission is required.

---

## 🧠 Key Features

### AI Risk Assessment

AI calculates insurance risk based on:

* Worker location
* Historical weather data
* Pollution levels
* Flood-risk zones

This enables **dynamic premium calculation**.

---

### Automatic Claim Trigger

Claims are triggered automatically when environmental thresholds are exceeded.

| Event         | Condition          | Payout |
| ------------- | ------------------ | ------ |
| Heavy Rain    | Rainfall > 80mm    | ₹400   |
| Heatwave      | Temperature > 45°C | ₹300   |
| Air Pollution | AQI > 400          | ₹250   |
| Earthquake    | Magnitude > 5      | ₹500   |

---

### Fraud Detection

The system prevents fraudulent claims using:

* GPS verification
* Duplicate claim detection
* Activity validation
* Anomaly detection

---

### Worker Dashboard

Workers can view:

* Active insurance plan
* Coverage details
* Claims history
* Risk alerts

---

### Admin Dashboard

Admins can monitor:

* Active policies
* Claims triggered
* Risk heatmaps
* Fraud alerts

---

## 🏗 System Architecture

```
React (Vite Frontend)
        │
        ▼
Spring Boot Backend
        │
 ┌──────┼────────┐
 ▼      ▼        ▼
MySQL  Redis   AI Services
        │
        ▼
 External APIs
(Weather / AQI / Disaster Alerts)
```

---

## ⚙️ Technology Stack

### Frontend

* React (Vite)
* CSS / Tailwind
* Axios

### Backend

* Spring Boot
* Gradle
* Spring Security
* JWT Authentication

### Database

* MySQL

### Cache

* Redis

### Containers

* Docker
* Docker Compose

### AI / ML

* Python
* Scikit-learn
* HuggingFace (optional)

---

## 📡 External APIs

| API              | Purpose                  |
| ---------------- | ------------------------ |
| OpenWeather API  | Weather & rainfall data  |
| AQICN API        | Air pollution monitoring |
| USGS API         | Earthquake detection     |
| Google OAuth     | Authentication           |
| Razorpay Sandbox | Payment simulation       |

---

# 🐳 Running the Project with Docker

The application runs using **Docker Compose** with four services:

* React Frontend
* Spring Boot Backend
* MySQL Database
* Redis Cache

---
## 1️⃣ Install Requirements

Install:

* Docker
* Docker Compose

Verify installation:

```bash
docker --version
docker compose version
```
---

## 2️⃣ Clone the Repository

```bash
git clone https://github.com/bavithran100/gigshield-ai.git
cd gigshield-ai
```
---

## 3️⃣ Run the Application

Start all services:

```bash
docker compose up --build
```

## 4️⃣ Access the Application

Frontend

```
http://localhost:5173
```

Backend API

```
https://localhost:8443
```
---

## 5️⃣ Stop the Application

```
docker compose down
```
---

## 🌍 Future Improvements

* Real-time disruption heatmaps
* AI-based premium optimization
* Delivery platform API integration
* Mobile application for workers

---

## 👨‍💻 Team

Guidewire **DEVTrails Hackathon Project**

Built to protect the livelihoods of **India’s gig economy workers**.
