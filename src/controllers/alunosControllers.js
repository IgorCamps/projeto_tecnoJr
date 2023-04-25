
const database = require('../configs/db')
const Aluno = require('../models/alunos')

exports.getAll =  async(req, res, next) =>{
    try {
        await database.sync();
        var novoAluno = await Aluno.findAll()
        
        return res.json(novoAluno);
    
    } catch (error) {
        return console.error(error);
    }

}

exports.getOne =  async(req, res, next) =>{
    try {
        await database.sync();
        const id = req.params.id
        var novoAluno = await Aluno.findByPk(id)
        
        return res.json(novoAluno);
    
    } catch (error) {
        return console.error(error);
    }

}

exports.post =  async(req, res, next) =>{
        
        await database.sync();
        var novoAluno = await Aluno.create({
            nome: req.body.nome,
            email: req.body.email,
            bairro: req.body.bairro,
            rua : req.body.rua,
            numCasa : req.body.numCasa
            
        });
        console.log(novoAluno);

        return res.json('Aluno cadastrado com sucesso');
}

exports.put =  async(req, res, next) =>{
    
    try {

        await database.sync();
        
        const id = req.params.id

        var attAluno = await Aluno.findByPk(id)
            if(attAluno){
                attAluno.nome = req.body.nome,
                attAluno.email = req.body.email,
                attAluno.bairro = req.body.bairro,
                attAluno.rua = req.body.rua,
                attAluno.numCasa = req.body.numCasa
   
                await attAluno.save();
            }
        return res.json(attAluno);
    }catch (error) {
        return console.error(error);
    }   
}

exports.delete = async(req, res, next) =>{
    try {
        const id = req.params.id
        const delAluno = await Aluno.findByPk(id)
        await delAluno.destroy();
        return res.json(delAluno);
    } catch (erro) {
      return console.error(erro)  
    }
}

    
