import os
import json
import webbrowser
from threading import Timer
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder="../cropos_dashboard")
CORS(app)

DB_FILE = os.path.join(os.path.dirname(__file__), "accounts.json")

def load_accounts():
    if not os.path.exists(DB_FILE):
        return {}
    try:
        with open(DB_FILE, "r") as f:
            data = json.load(f)
            return data.get("accounts", {})
    except json.JSONDecodeError:
        return {}

def save_accounts(accounts):
    with open(DB_FILE, "w") as f:
        json.dump({"accounts": accounts}, f)

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(app.static_folder, path)

@app.route("/api/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Missing fields"}), 400

    accounts = load_accounts()
    if username in accounts:
        return jsonify({"error": "User already exists"}), 409

    accounts[username] = password
    save_accounts(accounts)
    return jsonify({"success": True, "message": "Account created"})

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    accounts = load_accounts()
    if accounts.get(username) == password:
        return jsonify({"success": True, "token": f"mock_jwt_{username}"})
    return jsonify({"error": "Invalid credentials"}), 401

def open_browser():
    webbrowser.open_new("http://localhost:8080")

if __name__ == "__main__":
    print("==================================================")
    print(" CropOS Python Backend Started!")
    print(" Server running at: http://localhost:8080")
    print("==================================================")
    
    # Auto open browser after 1.5 seconds to ensure server is strictly bound and listening
    Timer(1.5, open_browser).start()
    
    # Turn off reloader to avoid issues, bind to 0.0.0.0
    app.run(host="0.0.0.0", port=8080, debug=False)
