const express = require('express');
const dotenv = require('dotenv');
const childProcess = require('child_process');
const logger = require('./middleware/logger'); 

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(logger);


app.use(express.json());


const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
  res.send('Hello, Express is working!');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  childProcess.exec(`start http://localhost:${PORT}`); 
});
