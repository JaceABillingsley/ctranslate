from flask import Flask, send_file
from flask_cors import CORS

app = Flask('')
CORS(app)

@app.route('/')
def index():
  return send_file('index.html')

@app.route('/<route>')
def route(route):
  return send_file(route)

app.run(host='0.0.0.0', port='5001')
