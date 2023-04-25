const Sequelize = require('sequelize');
// CONECTANDO AO BANCO DE DADOS, UTILIZEI UM BANCO DE DADOS CRIADO NO MYSQL COM O USUÁRIO "ROOT" E A SENHA UTILIZADA POR MIM MAS PODE SER ALTERADA
// PARA OUTRO BANCOO DE DADOS APENAS MUDANDO AS ROTAS E A PORTA
const sequelize = new Sequelize('crud', 'root', 'Zeusdiana2019',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});
module.exports = sequelize;