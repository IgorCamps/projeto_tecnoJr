const Sequelize = require('sequelize');
const database = require('../configs/db');

const Aluno = database.define('aluno',{
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
    email:{
        type: Sequelize.STRING,
        allowNul: false
    },
    bairro:{
        type: Sequelize.STRING,
        allowNul: false
    },
    rua:{
        type: Sequelize.STRING,
        allowNul: false
    },
    numCasa:{
        type: Sequelize.INTEGER,
        allowNul: false
    }
});

module.exports = Aluno;