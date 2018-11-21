var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaProfissao = new mongoose.Schema({

    nome: String,
    profissao: String,
    telefone: Number,
    site: String
    
})

module.exports = mongoose.model('Profissao', schemaProfissao);