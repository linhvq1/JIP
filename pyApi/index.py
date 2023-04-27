from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd

#Set up Flask:
app = Flask(__name__)
#Set up Flask to bypass CORS at the front end:
cors = CORS(app)

#Create the receiver API POST endpoint:
@app.route("/receiver", methods=["POST"])
def postME():
    data = request.get_json()
    data = jsonify(data)
    return data

#Create the receiver API POST endpoint:
@app.route("/read-csv", methods=["POST"])
def readCsv():
    data = request.files['file']
    data_pd = pd.read_csv(data)
    print(data_pd.head())
    return data_pd.to_json(orient="table")

@app.route("/", methods=["GET"])
def home():
    return 'hello world'
#Run the app:
if __name__ == "__main__":
    app.run(debug=True) #port, usually port 5000.