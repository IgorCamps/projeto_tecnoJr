const Sequelize = require('sequelize');
const database = require('../configs/db');


const Inscricao = database.define('inscricao',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNul: false,
        primaryKey: true
    },
    idAluno:{
        type: Sequelize.INTEGER,
        allowNul: false
    },
    idCurso:{
        type: Sequelize.INTEGER,
        allowNul: false
    },
    progresso:{
        type: Sequelize.DOUBLE,
        allowNul: false
    },
    aulas_assistidas:{
        type: Sequelize.DOUBLE,
        allowNul: false
    },
    qtdAulas:{
        type: Sequelize.DOUBLE,
        allowNul: false
    } 
});

module.exports = Inscricao;