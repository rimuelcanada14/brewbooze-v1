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

# Function to predict cost breakdown with increasing rent and permits adjustments
def predict_cost_breakdown(year, capital):
    X_test = np.array([[year, capital]])
    X_test_scaled = scaler_X.transform(X_test)  # Scale the input data
    prediction = model.predict(X_test_scaled)[0]

    # Adjust permits based on the year
    if year == 2024 : 
        permits_val = 50000
    elif year == 2025 : 
        permits_val = 51475
    elif year == 2026 :
        permits_val = 53045
    elif year == 2027 :
        permits_val = 54636
    elif year == 2028 :
        permits_val = 56275
    else :
        permits_val = 57964

    # Adjust rent based on the year (assuming a 5% increase per year starting from the predicted value)
    base_year = 2024  # Define the base year

    if year == 2025 : 
        growth_rate = 0.0295
    elif year == 2026 :
        growth_rate = 0.03
    elif year == 2027 :
        growth_rate = 0.03
    elif year == 2028 :
        growth_rate = 0.03
    else :
        growth_rate = 0.03

    year_difference = year - base_year
    adjusted_rent = prediction[2] * (1 + growth_rate) ** year_difference

    breakdown = {
        'equipment': prediction[0],
        'ingredients': prediction[1],
        'rent': adjusted_rent,  # Use adjusted rent value
        'renovation': prediction[3],
        'permits': permits_val,  # Use permits value based on year
        'utilities': prediction[5],
        'staff_income': prediction[6]
    }
    
    return breakdown
