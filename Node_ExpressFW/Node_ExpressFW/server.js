    var express = require('express'),
    app = express();

app  
    .get('/', (req, res) => {
        res.sendFile(`${__dirname}/assets/HTML1.html`)
    })
    .listen(3000)