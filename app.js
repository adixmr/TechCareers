const express = require('express');
const app = express();

app.use('/platform/', require('./src/routes/platform'))
app.use('/standalone/', require('./src/routes/standalone'))

app.listen('3000', (req, res) => {
    console.log(`server started`)
})