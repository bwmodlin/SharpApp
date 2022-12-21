from flask import Flask
from flask import jsonify

import sys
sys.path.insert(1, '/Users/maxperozek/CP499/scSHARP_tool/')
from scSHARP.sc_sharp import scSHARP

def handle(data):
    data_path = data["dataFile"]
    tool_list = ["scina", "scsorter", "sctype", "scpred", "singler"]
    out_path = data["outputPath"] + "/" + "output.csv"
    tool_preds = out_path
    marker_path = data["markerFile"]
    neighbors = int(data["neighbors"])
    config = data["configFile"]
    ref_path = data["refFile"]
    ref_label_path = data["labelFile"]

    sharp = scSHARP(data_path=data_path, preds_path=tool_preds, tools=tool_list, marker_path=marker_path,
                    neighbors=neighbors, config=config)

    #sharp.run_tools(out_path, ref_path, ref_label_path)
    sharp.run_prediction()
    sharp.save_model("/Users/maxperozek/desktop/RTools/name")

    print("done running")

    return jsonify({
                'resultStatus': 'SUCCESS',
                'message': "This is a test"
    })