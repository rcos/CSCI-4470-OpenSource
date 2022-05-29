import tensorflow as tf
from tensorflow.keras import Model
import matplotlib.pyplot as plt

def make_noisy_data(m=0.1, b=0.3, n=1000):
  x = tf.random.uniform(shape=(n,))
  noise = tf.random.normal(shape=(len(x),), stddev=0.01)
  y = m * x + b + noise
  return x, y

def predict(x):
  y = m * x + b
  return y

def squared_error(y_pred, y_true):
  return tf.reduce_mean(tf.square(y_pred - y_true))

x_train, y_train = make_noisy_data()
plt.plot(x_train, y_train, 'b.')
plt.show()

m = tf.Variable(0.)
b = tf.Variable(0.)

loss = squared_error(predict(x_train), y_train)
loss_vec = []
print("Starting loss {:.6f}".format(loss.numpy()))

learning_rate = 0.05
steps = 200  

for i in range(steps):

  with tf.GradientTape() as tape:
      predictions = predict(x_train)
      loss = squared_error(predictions, y_train)

  loss_vec.append(loss)
  gradients = tape.gradient(loss, [m, b])

  m.assign_sub(gradients[0] * learning_rate)
  b.assign_sub(gradients[1] * learning_rate)


  if i % 20 == 0:
      print("Step {:d}, Loss {:.6f}".format(i, loss.numpy()))

print("Solution: y = {:.6f} * x + {:.6f}".format(m.numpy(), b.numpy()))
plt.plot(range(steps), loss_vec)
plt.show()

plt.plot(x_train, y_train, 'b.')
plt.plot(x_train, predict(x_train), 'r.')
plt.show()
