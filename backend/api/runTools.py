from flask import Flask
from flask import jsonify

import sys
sys.path.append("C:/Users/benmo/Desktop/sharpapp")

from scSHARP_tool.scSHARP.sc_sharp import scSHARP

def handle(data):
    data_path = data["dataFile"]
    tool_preds = "./apipreds_att_marker_test.csv"
    tool_list = ["scina", "scsorter", "sctype", "scpred", "singler"]
    out_path = "C:/Users/benmo/Desktop/sharpapp/SharpApp/backend/api/output/output.csv"
    marker_path = data["markerFile"]
    neighbors = int(data["neighbors"])
    config = data["configFile"]
    ref_path = data["refFile"]
    ref_label_path = data["labelFile"]

    sharp = scSHARP(data_path=data_path, tool_preds=tool_preds, tool_list=tool_list, marker_path=marker_path,
                    neighbors=neighbors, config=config)

    print(out_path, ref_path, ref_label_path)

    sharp.run_tools(out_path, ref_path, ref_label_path)

    print("done running")

    return jsonify({
                'resultStatus': 'SUCCESS',
                'message': "This is a test"
    })