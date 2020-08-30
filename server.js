const express = require('express')
const dotenv = require('dotenv') 
const mongoose = require('mongoose')

const items = require('./routes/api/items')

// Load config
dotenv.config({ path: './config/config.env' })

const app = express();

//Connect to the database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected.'))
.catch((err) => console.log(err))

//Middleware to parse body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// Routes
app.use('/api/items', items);   

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`)
  )
