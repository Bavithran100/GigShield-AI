# GigShield AI

### AI-Powered Parametric Insurance for India's Gig Workers

## 📌 Problem Statement

India’s gig economy workers (Zomato, Swiggy, Amazon, Zepto delivery partners) depend on daily earnings. External disruptions like **heavy rain, floods, heatwaves, pollution, or curfews** can stop deliveries and reduce their income by **20–30%**.

Currently, these workers **have no financial protection** against such uncontrollable events.

This project builds an **AI-powered parametric insurance platform** that automatically protects gig workers from **income loss caused by environmental and social disruptions**.

---

# 🚀 Solution Overview

GigShield AI provides a **weekly subscription-based parametric insurance model** for gig workers.

Workers subscribe to a weekly insurance plan. If a disruption event occurs in their working area, the system **automatically detects the event and sends compensation instantly**.

No manual claims are required.

The system uses:

* Environmental APIs (weather, pollution, disaster alerts)
* AI-based risk assessment
* Automated claim triggers
* Fraud detection
* Instant payout system

---

# 🧠 Key Features

### 1️⃣ AI Risk Assessment

The platform predicts risk levels based on:

* Worker location
* Historical weather patterns
* Flood risk zones
* Pollution levels

This helps calculate **dynamic weekly premiums**.

---

### 2️⃣ Parametric Insurance Model

Instead of manual claims, payouts are triggered automatically when predefined conditions occur.

Example triggers:

| Event         | Condition          | Payout |
| ------------- | ------------------ | ------ |
| Heavy Rain    | Rainfall > 80mm    | ₹400   |
| Heatwave      | Temperature > 45°C | ₹300   |
| Air Pollution | AQI > 400          | ₹250   |
| Earthquake    | Magnitude > 5      | ₹500   |

---

### 3️⃣ Automatic Claim Processing

Workflow:

```
Environmental API detects disruption
        ↓
System checks worker location
        ↓
Active insurance policy verified
        ↓
Claim automatically created
        ↓
Instant payout sent
```

Workers **do not need to submit claims manually**.

---

### 4️⃣ Fraud Detection

The system prevents fraudulent claims using:

* GPS location verification
* Anomaly detection
* Duplicate claim detection
* Activity validation

---

### 5️⃣ Worker Dashboard

Workers can view:

* Active insurance coverage
* Weekly protection amount
* Claims history
* Risk alerts

---

### 6️⃣ Admin Dashboard

Insurance providers can monitor:

* Active policies
* Claims triggered
* Risk heatmaps
* Fraud alerts

---

# 🏗 System Architecture

```
                React (Vite Frontend)
                        │
                        │ REST API
                        ▼
               Spring Boot Backend
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
     MySQL DB        Redis Cache    AI Services
  (users/policies)   (sessions)    (risk + fraud)

                        │
                        ▼
                External Data APIs
        (Weather / AQI / Earthquake / Alerts)
```

---

# ⚙️ Technology Stack

### Frontend

* React (Vite)
* Tailwind / CSS
* Axios

### Backend

* Spring Boot
* Gradle
* Spring Security
* OAuth2 (Google Login)

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
* HuggingFace models (optional)

---

# 🔑 Authentication

Users authenticate using **Google OAuth Login**.

Workflow:

```
User clicks "Login with Google"
        ↓
Google authentication
        ↓
Backend receives user profile
        ↓
JWT token generated
        ↓
Token used for API requests
```

---

# 👤 User Onboarding

After login, users complete their profile:

Required fields:

* Name
* Phone number
* City
* Delivery platform
* Vehicle type
* Aadhaar number

---

# 🪪 Aadhaar Verification

Aadhaar authentication is performed using **KYC verification APIs**.

Example providers:

* Signzy
* IDfy
* Karza

Verification method:

```
User enters Aadhaar number
        ↓
KYC provider sends OTP
        ↓
User enters OTP
        ↓
Identity verified
```

For security, the system stores only:

* Aadhaar last 4 digits
* verification status

---

# 🚴 Gig Worker Verification

Workers must prove they are active delivery partners.

Verification methods:

### Option 1 — Screenshot Verification

Users upload screenshots from delivery apps (Swiggy/Zomato dashboard).

OCR extracts platform data to verify.

### Option 2 — Delivery Partner ID

Users submit their partner ID for verification.

### Option 3 — Admin Approval

Manual verification through admin dashboard.

---

# 💳 Insurance Subscription

Workers can subscribe to weekly plans.

| Plan     | Weekly Cost | Daily Coverage |
| -------- | ----------- | -------------- |
| Basic    | ₹10         | ₹200           |
| Standard | ₹20         | ₹400           |
| Premium  | ₹30         | ₹600           |

Workflow:

```
User selects plan
        ↓
Payment via Razorpay sandbox
        ↓
Policy activated for 7 days
```

---

# 🌦 Event Monitoring System

The backend runs a scheduled job every **10 minutes**.

It collects data from:

* Weather API
* Air Pollution API
* Disaster alerts

If conditions exceed thresholds, the system triggers payouts.

---

# 📡 External APIs

Free APIs used:

| API              | Purpose              |
| ---------------- | -------------------- |
| OpenWeather API  | Weather & rainfall   |
| AQICN API        | Air pollution        |
| USGS API         | Earthquake detection |
| Google OAuth     | Authentication       |
| Razorpay Sandbox | Payment simulation   |

---

# 💰 Claim & Payout Workflow

```
Environmental event detected
        ↓
Affected worker locations identified
        ↓
Active policy verified
        ↓
Automatic claim created
        ↓
Instant payout processed
```

---

# 🗄 Database Schema

### Users Table

```
id
email
name
phone
aadhaar_last4
kyc_status
worker_verified
platform
created_at
```

### Policies Table

```
id
user_id
plan_type
premium
coverage
start_date
end_date
status
```

### Events Table

```
id
event_type
location
severity
timestamp
```

### Claims Table

```
id
user_id
event_id
amount
status
created_at
```

---

# 🧰 Redis Usage

Redis is used for:

* API response caching
* JWT session storage
* rate limiting
* event caching

---

# 📊 Admin Analytics

The admin dashboard provides:

* claim statistics
* active policies
* disruption heatmaps
* fraud alerts

---

# 🔄 Complete Workflow

```
User logs in with Google
        ↓
Profile completion
        ↓
Aadhaar verification
        ↓
Gig worker verification
        ↓
Insurance subscription
        ↓
System monitors environmental events
        ↓
Disruption detected
        ↓
Automatic claim triggered
        ↓
Instant payout sent
```

---

# 🌍 Future Improvements

* Real-time risk heatmaps
* AI-based premium optimization
* Delivery platform API integration
* Mobile application for workers

---

# 👨‍💻 Team

Guidewire DEVTrails Hackathon Project

Built to protect the livelihoods of India’s gig workers.
