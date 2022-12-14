from flask import Flask
from flask import jsonify

def handle():
    return jsonify({
                'resultStatus': 'SUCCESS',
                'message': "This is a test"
    })