from flask import Flask, send_from_directory, request, jsonify
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api import runTools

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/submit")
def flask_hello():
    #response = runTools.handle(request)
    #response.headers.add('Access-Control-Allow-Origin', '*')
    #response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS")
    return

@app.route('/rtools/run', methods=['POST'])
def rtools():
    # Parse the request body as JSON
    data = request.get_json()

    runTools.handle(data)

    response = jsonify({"message" : "Successfully Ran RTools"}), 201, {'Content-Type': 'application/json'}

    return response

    # Access a specific field in the request data
    # name = data['name']

    