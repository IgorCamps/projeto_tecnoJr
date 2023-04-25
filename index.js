const express = require('express');
const server = express('express');


const routesAlunos = require('./src/routes/alunos');
const routesCursos = require('./src/routes/cursos')
const routerInscricao = require('./src/routes/inscrever')


server.use(express.json());


server.use(routesCursos);
server.use(routesAlunos);
server.use(routerInscricao);

server.listen(3000,()=>{console.log('Servidor Rodando')});