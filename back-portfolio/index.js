const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // خواندن مقادیر از فایل .env
const projectRouter = require('./src/routes/projectRouter');
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/' , (req , res) => {
    res.send('Hi YOUNES')
})

app.use(cors());
app.use('/api/projects', projectRouter)






MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@items.2hmpcuz.mongodb.net/`

// تنظیمات اتصال به دیتابیس
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

  const port = process.env.PORT || 5000 ;

  app.listen(port ,  () => console.log(`server running on port: ${port}`));
  