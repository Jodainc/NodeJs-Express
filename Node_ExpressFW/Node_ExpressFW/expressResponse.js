var express = require('express'),
    app = express();

app
    .get('/', (req, res) => {
        res.end(`<h1> hola mundo }:)  </h1>`)
    })
app.get('/user/:id', (req, res) => { res.end(`<h1>bienvenido a express ${req.params.id}</h1>`) })
    .listen(3000)