require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});


app.use('/platform/', require('./src/routes/platform'))
app.use('/standalone/', require('./src/routes/standalone'))
app.use('/update/', require('./src/routes/update'))

app.listen('3000', (req, res) => {
    console.log(`server started`)
})