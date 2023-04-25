const Sequelize = require('sequelize');
const database = require('../configs/db');


const Curso = database.define('curso',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNul: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNul: false
    },
    qtdAulas:{
        type: Sequelize.INTEGER,
        allowNul: false
    },
    preco:{
        type: Sequelize.DOUBLE,
        allowNul: false
    }
});

module.exports = Curso;