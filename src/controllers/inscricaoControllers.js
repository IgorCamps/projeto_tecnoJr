const database = require('../configs/db')

const InscricaoAlunos = require('../models/inscricao')

exports.getAll = async(req, res, next) =>{

    try {
        await database.sync();
        var alunos = await InscricaoAlunos.findAll();

        var mensagem = 'Progresso dos alunos:';
        alunos.forEach(aluno => {
            mensagem += ' Com id ' + aluno.id + ': ' + aluno.progresso + '%';
        });

        return res.json({ message: mensagem });

    } catch (error) {
        return console.error(error);
    }
}

exports.post =  async(req, res, next) =>{   
    try {

        var progresso_1 = (req.body.aulas_assistidas/req.body.qtdAulas)*100;
        
        await database.sync();
        var cadAluno = await InscricaoAlunos.create({
            idAluno: req.body.idAluno,
            idCurso: req.body.idCurso,
            progresso: progresso_1,
            aulas_assistidas: req.body.aulas_assistidas,
            qtdAulas: req.body.qtdAulas
        });

        console.log(cadAluno);

        return res.json('Aluno cadastrado no curso com sucesso');

    }catch (error) {
        return console.error(error);
    }  
}

exports.getOne = async(req, res, next) =>{

    try {
        await database.sync();
        var id = req.params.id
        var progressoAluno = await InscricaoAlunos.findByPk(id)
        return res.json({ message: 'O progresso do aluno é ' + progressoAluno.progresso + '%' });

    } catch (error) {
        return console.error(error);
    }
}

exports.put = async(req, res) =>{
    try {
        await database.sync();
        
        const id = req.params.id
        var attProgresso = await InscricaoAlunos.findByPk(id)
        var progresso_1 = (req.body.aulas_assistidas/attProgresso.qtdAulas)*100;
            if(attProgresso){
                attProgresso.aulas_assistidas = req.body.aulas_assistidas
                attProgresso.progresso = progresso_1
                await attProgresso.save();
            }
        return res.json(attProgresso);
    }catch (error) {
        return console.error(error);
    }   
}

exports.delete = async(req, res) =>{
    try {
        const id = req.params.id
        const cancelar = await InscricaoAlunos.findByPk(id)
        await cancelar.destroy();
        return res.json('Inscricao cancelada com sucesso');
    }catch (error) {
        return console.error(error)  
    }
}
