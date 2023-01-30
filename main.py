from flask import Flask, send_file

app = Flask('')

@app.route('/')
def index():
  return send_file('index.html')

@app.route('/<route>')
def route(route):
  return send_file(route)

app.run('0.0.0.0')