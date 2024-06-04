const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://admin:123435@myserver.gcov0jh.mongodb.net/?retryWrites=true&w=majority&appName=myserver";


// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'mystore'
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
module.exports = mongoose