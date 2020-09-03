const http = require("http");
let express = require('express');
let bodyParser = require('body-parser');
var cors = require('cors')

const port = 8000; // port on which application will be running

const app = express() // initiating express server
app.use(cors())  // enable cors
app.use(bodyParser.json()); // for handling post data

// include main routes files in index.js
app.use('/api', require('./apis/routes'));

//starting server
app.listen(port, () => {
    console.log("project running on port "+  port)
})

module.exports = app