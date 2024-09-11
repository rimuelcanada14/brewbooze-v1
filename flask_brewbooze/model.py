# model.py

import numpy as np
from sklearn.linear_model import LinearRegression
import joblib

# Example dataset (replace with your actual data)
X = np.array([[100000, 0.05], [150000, 0.03], [200000, 0.04], [250000, 0.06]])
Y = np.array([[20000, 30000, 40000, 5000],   # [Equipment, Ingredients, Rent, Renovation]
              [25000, 35000, 45000, 6000],
              [30000, 40000, 50000, 7000],
              [35000, 45000, 55000, 8000]])

# Train the model
model = LinearRegression()
model.fit(X, Y)

# Save the model
joblib.dump(model, 'model.pkl')
