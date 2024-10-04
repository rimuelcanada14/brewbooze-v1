from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from models.mlr_model import predict_cost_breakdown, get_r2_score
import os

app = Flask(__name__, static_folder="../frontend/dist") 
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    year = data.get('year')
    capital = data.get('capital')
    
    if year is None or capital is None:
        return jsonify({'error': 'Missing year or capital'}), 400
    
    try:
        result = predict_cost_breakdown(year, capital)
        result['r2_score'] = get_r2_score()
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
