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

    # Define minimum rent values for each year
    min_rent_by_year = {
        2024: 24000,
        2025: 24708,
        2026: 25462,
        2027: 26225,  # Example values, adjust as needed
        2028: 27012   # Example values, adjust as needed
    }

    # Set the minimum rent based on the year
    if year in min_rent_by_year:
        adjusted_rent = max(prediction[2], min_rent_by_year[year])  # Ensure rent is at least the minimum for the year
    else:
        adjusted_rent = prediction[2]  # Use predicted rent if year not in the defined range
        
    

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
