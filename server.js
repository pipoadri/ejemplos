const express = require('express');
const server = express();

server.use(express.json());

server.get('/autores', (req, res) => {
    let id = req.query.id;
    console.log(id);
    res.send(id);
});

server.get('/autores/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.send(id);
});

server.listen(3000, () => {
    console.log("Servidor en ejecución...");
})