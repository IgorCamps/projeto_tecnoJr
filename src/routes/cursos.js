const express = require('express');
const routes = express.Router();
const cursosController = require('../controllers/cursosControllers');

// ROTA PARA EXIBIR TODOS OS CURSOS
routes.get('/cursos' , cursosController.getAll)
// ROTA PARA EXIBIR UM ÚNICO CURSO BUSCANDO PELA 'ID'
routes.get('/cursos/:id', cursosController.getOne)
// ROTA PARA CADASTRAR/CRIAR UM NOVO CURSO E INSERE NO BANCO DE DADOS
routes.post('/createCurso', cursosController.post)
// ROTA PARA ATUALIZAR UM ÚNICO CURSO BUSCANDO PELA 'ID'
routes.put('/attCurso/:id', cursosController.put)
// ROTA PARA EXCLUIR UM ÚNICO CURSO BUSCANDO PELA 'ID'
routes.delete('/delCurso/:id', cursosController.delete)
module.exports = routes;