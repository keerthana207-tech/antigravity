# CropOS (AgriVision Platform)

## Problem Statement
Modern farming lacks a unified, intelligent platform to coordinate data across various domains (weather, soil health, market prices, crop phenology). Farmers often have to manually parse disjointed sources of information, leading to suboptimal decisions, delayed interventions, and yield loss. There is an urgent need for an accessible, integrated operating system that not only consolidates this data but actively synthesizes it into actionable, hyper-local insights for farm management.

## Project Description
CropOS is a comprehensive farm-level operating system that acts as a digital twin of your farm. Built with a Flask (Python) backend and a highly interactive, modern frontend, the platform offers a robust, multi-faceted dashboard. Key features include:

- **Digital Twin & Analytics:** Visual, 3D-like representation of farm sections with real-time sensor analytics (soil moisture, pH, health index) and predictive AI-driven phenology tracking.
- **Agent Orchestra:** A Multi-Agent AI hub utilizing swarm intelligence. Specialized agents (WeatherWise, MarketMind, SoilSense) analyze individual domains and reach a transparent consensus to answer complex farmer queries accurately.
- **Kerala Hub (Govt Scheme Navigator):** An intelligent matching tool leveraging Retrieval-Augmented Generation (RAG) to connect farmers with applicable Indian/Kerala government subsidies based on their specific crop and land profile.
- **Farm Passport:** Immutable ledger features utilizing Web3 technology for logging farm activities, creating an auditable and traceable history (Carbon offsets, organic scoring).

---

## Google AI Usage
### Tools / Models Used
- Google Gemini 1.5 Pro (Model)
- Google Gemini Embeddings
- Google AI Studio API

### How Google AI Was Used
Google AI is seamlessly integrated into the core intelligence layers of CropOS:
1. **Agent Orchestra (Multi-Agent Swarm):** We utilize Gemini to power specialized agents that process concurrent inputs and synthesize a consensus decision. The model handles the complex reasoning required to balance variables like impending rain, current soil moisture, and market price fluctuations, delivering a unified final decision to the farmer.
2. **Govt Scheme Navigator:** Gemini models power our Retrieval-Augmented Generation (RAG) agent, ingesting a vector database of 47+ agricultural schemes and intelligently matching them to the specific attributes (acreage, crop type, location) of the user's profile.
3. **Predictive Insights & Monsoon AI:** Generating human-readable, context-aware alerts (e.g., delaying pesticide spray due to rain) natively parsed by Gemini based on structured weather data.

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
