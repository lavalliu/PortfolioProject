const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://admin:<password>@myserver.asghb3k.mongodb.net/?retryWrites=true&w=majority&appName=myserver";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });