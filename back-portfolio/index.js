const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); 
const helmet = require('helmet');
const port = process.env.PORT;

const projectRouter = require('./src/routes/projectRouter');
const CollaborateRouter = require('./src/routes/formeCollaborateRoute');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(helmet());
app.use(cors({
  origin: ['https://younessheikhlar.vercel.app', 'https://younessheikhlar.be', 'https://younessheikhlar.com' ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: true, 
}));


app.get('/' , (req , res) => {
  res.send('hello world')
})

app.use('/api/projects', projectRouter);
app.use('/api/collaborates' , CollaborateRouter);

DATABASE_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@items.2hmpcuz.mongodb.net/`

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(DATABASE_URI, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });


  app.listen(port ,  () => console.log(`server running on port: ${port}`));
  