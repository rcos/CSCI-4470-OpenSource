# MIT License
#
# This example is partially derived from the fashion example in Tensorflow. 
# New code is copywritten by Wesley Turner (c) 2022
#
# The original code is copywritten below.
#
# Copyright (c) 2017 François Chollet
#
# Permission is hereby granted, free of charge, to any person obtaining a
# copy of this software and associated documentation files (the "Software"),
# to deal in the Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish, distribute, sublicense,
# and/or sell copies of the Software, and to permit persons to whom the
# Software is furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
# THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
# DEALINGS IN THE SOFTWARE.

# TensorFlow and tf.keras
import tensorflow as tf

# Helper libraries
import numpy as np
import matplotlib.pyplot as plt

def make_noisy_data(m=0.1, b=0.3, n=100):
  x = 4*tf.random.uniform(shape=(n,1,1)) - 2
  noise = tf.random.normal(shape=(len(x),1,1), stddev=0.01)
  y = m * x + b + noise
  return x, y

def predict(m, b, x):
  y = m * x + b
  return y

def squared_error(y_pred, y_true):
  return tf.reduce_mean(tf.square(y_pred - y_true))

# Loading data
m = 0.1
b = 0.3
(train_x, train_y) = make_noisy_data(m=m, b=b, n=20000)
(test_x, test_y) = make_noisy_data(m=m, b=b, n=10000)


# 1. Create a model with a single neuron in 1 dense layer and 'relu' activation
# 2. Your model should use 'RMSprop' optimization, and mean squared error for
#    both the loss function and the metric
# 3. Train your model on the 'train_x' and 'train_y' data from above. Use
#    at least three epochs

model = tf.keras.Sequential([
    tf.keras.layers.Dense(1, activation='relu'),
])

model.compile(optimizer=tf.keras.optimizers.SGD(learning_rate=0.2),
              loss=tf.keras.losses.mean_squared_error,
              metrics=tf.keras.metrics.mean_squared_error)

model.fit(train_x, train_y, epochs=10)

# 4. Then evaluate the model against the test_x and test_y
test_loss, test_acc = model.evaluate(test_x,  test_y, verbose=2)

#5 Finally, use your model to predict the correct output from the 'test_x'
predictions = model.predict(test_x)

# Calculate the actual values
actual = predict(m, b, test_x)

# Report
print('\nTest accuracy: ', test_acc, '\nTest Loss: ', test_loss)
print("Accuracy (MeanSquaredError): ", squared_error(predictions, actual).numpy())

# Plot
plt.plot(np.squeeze(train_x), np.squeeze(train_y), 'b.')
plt.plot(np.squeeze(test_x), np.squeeze(predictions), 'g*')
plt.plot(np.squeeze(test_x), np.squeeze(actual), 'r-')
plt.show()



