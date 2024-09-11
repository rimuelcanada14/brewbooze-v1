# backend/models/mlr_model.py
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

# Read Excel file
def load_data():
    data = pd.read_excel('mlr_data.xlsx')  # Load from Excel file
    X_train = data[['Capital', 'InflationRate']].values
    Y_train = data[['Equipment', 'Ingredients', 'Rent', 'Renovation']].values
    return X_train, Y_train

# Load data and train the model
X_train, Y_train = load_data()
model = LinearRegression()
model.fit(X_train, Y_train)

# Calculate R² score
r2_score = model.score(X_train, Y_train)
print(f'R² Score: {r2_score}')  # Debugging print statement

# Fixed value for permits
PERMITS_COST = 2000

# Function to predict cost breakdown
def predict_cost_breakdown(capital, inflation_rate):
    X_test = np.array([[capital, inflation_rate]])
    prediction = model.predict(X_test)[0]
    
    # Add fixed permit cost
    breakdown = {
        'equipment': prediction[0],
        'ingredients': prediction[1],
        'rent': prediction[2],
        'renovation': prediction[3],
        'permits': PERMITS_COST
    }
    return breakdown
