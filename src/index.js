const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('/Config/database.config.js');

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());


connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = app;
