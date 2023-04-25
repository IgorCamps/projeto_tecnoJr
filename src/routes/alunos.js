const express = require('express');
const routes = express.Router();
const alunosController = require('../controllers/alunosControllers');


// ROTA PARA EXIBIR TODOS OS ALUNOS
routes.get('/alunos', alunosController.getAll)
// ROTA PARA EXIBIR UM ÚNICO ALUNO BUSCANDO PELA 'ID'
routes.get('/alunos/:id', alunosController.getOne)
// ROTA PARA CADASTRAR/CRIAR UM NOVO ALUNO E INSERE NO BANCO DE DADOS
routes.post('/createAluno' , alunosController.post)
// ROTA PARA ATUALIZAR UM ÚNICO ALUNO BUSCANDO PELA 'ID'
routes.put('/attAluno/:id', alunosController.put)
// ROTA PARA EXCLUIR UM ÚNICO ALUNA BUSCANDO PELA 'ID'
routes.delete('/delAluno/:id', alunosController.delete)
module.exports = routes;