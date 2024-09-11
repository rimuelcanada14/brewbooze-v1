# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from models.mlr_model import predict_cost_breakdown, r2_score

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    capital = data.get('capital')
    inflation_rate = data.get('inflation_rate')
    
    if capital is None or inflation_rate is None:
        return jsonify({'error': 'Missing capital or inflation_rate'}), 400
    
    result = predict_cost_breakdown(capital, inflation_rate)
    
    # Include the R² score in the response
    result['r2_score'] = r2_score
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
