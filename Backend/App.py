from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()
    print("Received:", data)
    return jsonify({"status": "success", "message": "Data received."})

if __name__ == "__main__":
    app.run(debug=True)
