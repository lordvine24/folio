from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables

app = Flask(__name__)
CORS(app)  # Enable CORS

# Configuration
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default-secret-key')

# Portfolio data
portfolio_data = {
    "about": "I'm a passionate developer creating innovative solutions...",
    "skills": ["Python", "JavaScript", "Flask", "HTML/CSS"],
    "projects": [
        {"name": "Portfolio Website", "description": "My personal portfolio"},
        {"name": "E-commerce App", "description": "Online shopping platform"}
    ],
    "contact": {
        "email": "your.lordvineokoth@gmail.com",
        "phone": "+254116243186",
        "social": {
            "github": "https://github.com/yourusername",
            "linkedin": "https://linkedin.com/in/yourprofile"
        }
    }
}

@app.route('/')
def home():
    return 'Welcome to the Portfolio API!'

@app.route('/api/portfolio', methods=['GET'])
def get_portfolio():
    return jsonify(portfolio_data)

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.json
    print("Received contact form submission:", data)
    return jsonify({"status": "success", "message": "Contact form submitted successfully"})

# 🔥 Chatbot backend route
@app.route('/api/chat', methods=['POST'])
def chat_response():
    user_input = request.json.get('message', '').lower()

    if "skill" in user_input:
        response = "I have experience with Python, PHP,JavaScript, Flask, and HTML/CSS and also frame work like react and now still learning about laravel."
    elif "hello" in user_input:
        response = "hello ,am glad you have visited my site ,feel free to expore my work."
    elif "project" in user_input:
        response = "I've worked on a Portfolio Website and a church website od the DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY."
    elif "contact" in user_input:
        response = "You can reach me at my email lordvineokoth@gmail.com or +254116243186."
    elif "who" in user_input or "about" in user_input:
        response = "I'm a passionate developer creating innovative solutions for the web."
    else:
        response = "I'm not sure how to answer that. Try asking about my skills, projects, or contact info."

    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
