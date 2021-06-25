const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Este es mi proyecto\n');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


//conexion a la base de datos
const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/3000';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Data received');
})