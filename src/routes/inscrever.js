const express = require('express');
const routes = express.Router();
const inscricaoController = require('../controllers/inscricaoControllers');


// ROTA PARA INSCREVER ALUNO NO CURSO
routes.post('/inscricao', inscricaoController.post)
// ROTA PARA EXIBIR O PROGRESSO DO ALUNO USANDO O ID
routes.get('/progresso/:id', inscricaoController.getOne)
// ROTA PARA EXIBIR O PROGRESSO DE TODOS OS ALUNOS
routes.get('/progresso', inscricaoController.getAll)
// ROTA PARA ATUALIZAR AS AULAS ASSISTIDAS PELO ID
routes.put('/atualizar/:id', inscricaoController.put)
// ROTA PARA CANCELAR INSCRIÇÃO DO ALUNO
routes.delete('/cancelar/:id', inscricaoController.delete)

module.exports = routes;