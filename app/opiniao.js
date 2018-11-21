var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OpiniaoSchema = new Schema({
    nome: String,
    opiniao: String,
    nota: Number,
   // telefone: Int 
});


module.exports = mongoose.model('opiniao', OpiniaoSchema);