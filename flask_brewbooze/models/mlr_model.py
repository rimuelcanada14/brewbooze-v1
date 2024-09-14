import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler

# Load and prepare data
def load_data():
    data = pd.read_excel('mlr_data.xlsx')  # Load from Excel file
    # Ensure correct columns are loaded
    X = data[['Year', 'Capital']]
    Y = data[['Equipment', 'Ingredients', 'Rent', 'Renovation', 'Permits', 'Utilities', 'Staff Income']]
    
    # Scale features
    scaler_X = StandardScaler()
    X_scaled = scaler_X.fit_transform(X)
    
    return scaler_X, X_scaled, Y

# Load data and train the model
scaler_X, X_train, Y_train = load_data()
model = LinearRegression()
model.fit(X_train, Y_train)

# Calculate R² score
r2_score = model.score(X_train, Y_train)
print(f'R² Score: {r2_score}')  # Debugging print statement

# Function to predict cost breakdown
def predict_cost_breakdown(year, capital):
    X_test = np.array([[year, capital]])
    X_test_scaled = scaler_X.transform(X_test)  # Scale the input data
    prediction = model.predict(X_test_scaled)[0]
    
    breakdown = {
        'equipment': prediction[0],
        'ingredients': prediction[1],
        'rent': prediction[2],
        'renovation': prediction[3],
        'permits': prediction[4],
        'utilities': prediction[5],
        'staff_income': prediction[6]
    }
    return breakdown
