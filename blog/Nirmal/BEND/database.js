const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://nirmal:12345@journalapp.fnxu0xn.mongodb.net/?retryWrites=true&w=majority&appName=journalApp";


// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'journalApp'
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
module.exports = mongoose