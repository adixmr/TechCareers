const express = require('express');
const app = express();

app.use('/platform/', require('./src/routes/platform'))

app.listen('3000', (req, res) => {
    console.log(`server started`)
})