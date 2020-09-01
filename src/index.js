const http = require("http");
let express = require('express');
let bodyParser = require('body-parser');

const port = 3000;

const app = express()
app.use(bodyParser.json());

app.use('/api', require('./apis/routes'));

app.listen(port, () => {
    console.log("project running on port "+  port)
})

module.exports = app