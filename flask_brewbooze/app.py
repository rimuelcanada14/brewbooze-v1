from flask import Flask, request, jsonify
from flask_cors import CORS
from models.mlr_model import predict_cost_breakdown, get_r2_score

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins

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

if __name__ == '__main__':
    app.run()
