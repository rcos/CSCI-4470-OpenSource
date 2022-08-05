
# Calculate the actual values
actual = predict(m, b, test_images)

# Report
print('\nTest accuracy: ', test_acc, '\nTest Loss: ', test_loss)
print("Accuracy (MeanSquaredError): ", squared_error(predictions, actual).numpy())

# Plot
plt.plot(np.squeeze(train_images), np.squeeze(train_labels), 'b.')
plt.plot(np.squeeze(test_images), np.squeeze(predictions), 'g*')
plt.plot(np.squeeze(test_images), np.squeeze(actual), 'r.')
plt.show()


