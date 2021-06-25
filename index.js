const http = require('http');
const apiRoutes = require('./routes/api')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo\n');
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

app.get('/api/posts/', apiRoutes.loadPosts)
app.get('/api/posts/:id', apiRoutes.loadPost)
app.post('/api/posts/', apiRoutes.newPost)
app.put('/api/posts/', apiRoutes.updatePost) // No lleva parámetro id, ya que lo mandamos en el body.
app.delete('/api/posts/:id', apiRoutes.deletePost)