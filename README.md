# CropOS 🌾 - AI-Powered Farm Operating System

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)
![Google AI](https://img.shields.io/badge/Google-Gemini%201.5%20Pro-red.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

> **Your farm's digital twin, powered by Google Gemini AI**

**An intelligent agricultural platform that transforms raw sensor data into actionable farming decisions through multi-agent AI orchestration.**

---
## 📑 Table of Contents

- [Problem Statement](#problem-statement)
- [Features](#features)
- [Google AI Integration](#google-ai-integration)
- [Screenshots](#screenshots)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Contributing](#contributing)
- [License](#license)

---
## Problem Statement
Modern farming lacks a unified, intelligent platform to coordinate data across various domains (weather, soil health, market prices, crop phenology). Farmers often have to manually parse disjointed sources of information, leading to suboptimal decisions, delayed interventions, and yield loss. There is an urgent need for an accessible, integrated operating system that not only consolidates this data but actively synthesizes it into actionable, hyper-local insights for farm management.

## Project Description

## ✨ Key Features

### 🌍 Digital Twin & Analytics
Visual, 3D-like representation of farm sections with real-time sensor analytics (soil moisture, pH, health index) and predictive AI-driven phenology tracking.

- **Real-time Monitoring**: 12+ sensors tracking soil moisture, pH levels, and crop health
- **3D Farm Visualization**: Interactive map showing different farm sections
- **Predictive Phenology**: AI-driven predictions for crop growth stages

### 🤖 Agent Orchestra (Multi-Agent AI Hub)
A Multi-Agent AI hub utilizing swarm intelligence. Specialized agents (WeatherWise, MarketMind, SoilSense) analyze individual domains and reach a transparent consensus to answer complex farmer queries accurately.

- **WeatherWise Agent**: Analyzes weather patterns and rainfall predictions
- **MarketMind Agent**: Tracks market prices and supply chain dynamics
- **SoilSense Agent**: Monitors soil conditions and moisture levels
- **Consensus Decision Making**: Transparent reasoning with confidence scores

### 🎯 Kerala Hub (Govt Scheme Navigator)
An intelligent matching tool leveraging Retrieval-Augmented Generation (RAG) to connect farmers with applicable Indian/Kerala government subsidies based on their specific crop and land profile.

- **RAG-Powered Matching**: Semantic search through 47+ government schemes
- **Personalized Recommendations**: Based on crop type, acreage, and location
- **Automatic Eligibility Check**: Instant scheme applicability assessment

### 🔒 Farm Passport (Web3 Integration)
Immutable ledger features utilizing Web3 technology for logging farm activities, creating an auditable and traceable history.

- **Activity Logging**: Permanent record of all farm operations
- **Carbon Offset Tracking**: Monitor and verify carbon credits
- **Organic Certification Support**: Transparent history for certification processes

---
## Google AI Usage
## 🤖 Google AI Integration

### Models & Tools Used

- **Google Gemini 1.5 Pro** - Core reasoning and multi-agent orchestration
- **Google Gemini Embeddings** - Vector search for scheme matching
- **Google AI Studio API** - Production deployment and API access

---

### How Google AI Powers CropOS

#### 1️⃣ **Multi-Agent Orchestration** 🧠

**Model:** Gemini 1.5 Pro  
**Purpose:** Powers specialized AI agents that work together to make farming decisions

**Implementation:**
```python
# Example: Agent Orchestra Decision Making
farmer_question = "Should I harvest my ginger next week?"

# Gemini processes multiple agent inputs:
# - WeatherWise: 85% rain probability detected
# - MarketMind: Price dip to ₹49/kg, recovery expected in 10 days
# - SoilSense: 65% soil moisture (high risk during rain)

# Consensus reached with 98% confidence:
decision = "WAIT 10 DAYS"
```

**Real-world Impact:** Prevents harvest during unsuitable conditions, optimizing both crop quality and market returns.

---

#### 2️⃣ **RAG-Powered Scheme Navigator** 📋

**Model:** Gemini 1.5 Pro + Google Embeddings  
**Purpose:** Intelligent matching of government schemes to farmer profiles

**Implementation:**
- Vector database of 47+ agricultural schemes (Kerala & Indian govt)
- Semantic search using Google Embeddings for accurate matching
- Gemini generates natural language explanations of eligibility

**Real-world Impact:** Farmers discover applicable subsidies automatically instead of manual research through hundreds of pages of documents.

---

#### 3️⃣ **Predictive Analytics & Context-Aware Alerts** 🌧️

**Model:** Gemini 1.5 Pro  
**Purpose:** Generate actionable, human-readable farming recommendations

**Example Output:**
- "Delay pesticide application by 3 days due to incoming rain"
- "Optimal harvesting window: March 15-18 based on weather and market conditions"
- "Soil moisture at 65% - consider drainage before next irrigation"

**Real-world Impact:** Converts complex multi-source data into simple, actionable guidance for farmers.

---

### Proof of Google AI Usage

📁 **API Integration Screenshots:** `/proof` directory  
📊 **Live Agent Responses:** See screenshots section below  
🔑 **API Key Configuration:** `backend/.env` file

---

## Proof of Google AI Usage
Attach screenshots in a `/proof` folder:

![AI Proof](./proof/screenshot1.png)

*(Note: Add your Google AI Studio or API Dashboard screenshots in the `/proof` directory)*

---

## Screenshots 
Add project screenshots:

![Dashboard Overview](./assets/screenshot1.png)  
![Agent Orchestra](./assets/screenshot2.png)

*(Note: Add your actual dashboard screenshots in the `/assets` directory)*

---

## Demo Video
Upload your demo video to Google Drive and paste the shareable link here(max 3 minutes).
[Watch Demo](#)

---

## Installation Steps

```bash
# Clone the repository
git clone <your-repo-link>

# Go to project folder
cd project-name

# Install backend dependencies
py -m pip install -r backend/requirements.txt

# Run the project (Starts the local Flask backend)
Start_CropOS.bat

# Alternatively, run manually:
py backend/server.py
```
