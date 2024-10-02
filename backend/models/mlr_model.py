import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler

# Global variable for R² score
global_r2_score = None

# Define function to load data for different years
def load_data(year):
    if year == 2024:
        data = pd.read_csv('mlr_four.csv')  # Load data for 2024
    elif year == 2025:
        data = pd.read_csv('mlr_five.csv')  # Load data for 2025
    elif year == 2026:
        data = pd.read_csv('mlr_six.csv')  # Load data for 2026
    elif year == 2027:
        data = pd.read_csv('mlr_seven.csv')  # Load data for 2027
    elif year == 2028:
        data = pd.read_csv('mlr_eight.csv')  # Load data for 2026
    elif year == 2029:
        data = pd.read_csv('mlr_nine.csv')  # Load data for 2027
    else:
        raise ValueError("Year not supported or no data available")

    # Ensure correct columns are loaded
    X = data[['Year', 'Capital']]
    Y = data[['Equipment', 'Ingredients', 'Rent', 'Renovation', 'Permits', 'Utilities', 'Staff Income']]
    
    # Scale features
    scaler_X = StandardScaler()
    X_scaled = scaler_X.fit_transform(X)
    
    return scaler_X, X_scaled, Y

# Train model based on year
def train_model(year):
    global global_r2_score
    
    scaler_X, X_train, Y_train = load_data(year)
    model = LinearRegression()
    model.fit(X_train, Y_train)
    
    # Calculate R² score
    global_r2_score = model.score(X_train, Y_train)
    print(f'R² Score for year {year}: {global_r2_score}')  # Debugging print statement

    return scaler_X, model

# Predict cost breakdown based on year and capital
def predict_cost_breakdown(year, capital):
    scaler_X, model = train_model(year)  # Train model based on the year

    X_test = np.array([[year, capital]])
    X_test_scaled = scaler_X.transform(X_test)  # Scale the input data
    prediction = model.predict(X_test_scaled)[0]

    # Adjust permits based on the year
    permits_by_year = {
        2024: 50000,
        2025: 51475,
        2026: 53045,
        2027: 54636,
        2028: 56275,
        2029: 57964
    }
    
    permits_val = permits_by_year.get(year, 57964)  # Default to 2029 value if year not in dictionary

    # Define minimum rent values for each year
    min_rent_by_year = {
        2024: 24000,
        2025: 24708,
        2026: 25462,
        2027: 26225,
        2028: 27012
    }

    # Set the minimum rent based on the year
    adjusted_rent = max(prediction[2], min_rent_by_year.get(year, prediction[2]))  # Use predicted rent if year not in the defined range

    breakdown = {
        'equipment': prediction[0],
        'ingredients': prediction[1],
        'rent': adjusted_rent,
        'renovation': prediction[3],
        'permits': permits_val,
        'utilities': prediction[5],
        'staff_income': prediction[6]
    }
    
    return breakdown

# Expose r2_score for use in other modules
def get_r2_score():
    global global_r2_score
    return global_r2_score
