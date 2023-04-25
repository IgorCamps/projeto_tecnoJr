
const database = require('../configs/db')
const Curso = require('../models/cursos')

exports.getAll =  async(req, res, next) =>{
    try {
        await database.sync();
        var exibiCursos = await Curso.findAll()
        
        return res.json(exibiCursos);
    
    } catch (error) {
        return console.error(error);
    }

}

exports.getOne =  async(req, res, next) =>{
    try {
        await database.sync();
        const id = req.params.id
        var umCurso = await Curso.findByPk(id)
        
        return res.json(umCurso);
    
    } catch (error) {
        return console.error(error);
    }

}

exports.post =  async(req, res, next) =>{
        try {
            await database.sync();
            var novoCurso = await Curso.create({
                nome: req.body.nome,
                qtdAulas: req.body.qtdAulas,
                preco: req.body.preco,
            });
            console.log(novoCurso);
            return res.json('Cursos cadastrado com sucesso');

        } catch (error) {
            return console.error(error);
        } 
}

exports.put =  async(req, res, next) =>{
    try {
        await database.sync();
        
        const id = req.params.id
        var attCurso = await Curso.findByPk(id)
            if(attCurso){
                attCurso.nome = req.body.name,
                attCurso.qtdAulas = req.body.qtdAulas,
                attCurso.preco = req.body.preco,
                await attCurso.save();
            }
        return res.json(attCurso);
    }catch (error) {
        return console.error(error);
    }   
}

exports.delete = async(req, res, next) =>{
    try {
        const id = req.params.id
        const delCurso = await Curso.findByPk(id)
        await delCurso.destroy();
        return res.json('Curso excluido com sucesso');
    } catch (error) {
      return console.error(error)  
    }
}

    
