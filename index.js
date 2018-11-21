// index.js
var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb').MongoClient;
const assert = require('assert');
var mongoose = require('mongoose')

//var Usuario     = require('./app/usuario');

var Opiniao = require('./app/opiniao')

var Profissao = require('./app/profissao');
var app = express();



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


mongoose.connect('mongodb://renan:renan123@ds141902.mlab.com:41902/servico');

app.set('port', (process.env.PORT || 8080))




app.listen(app.get('port'));

app.get('/', function(req, res){
    res.json({ mensaje: 'Un ejemplo de nodejs, express y Heroku'});
  });


app.get('/opiniao',function(req, res){

    var opiniao= new Opiniao();

   Opiniao.find(function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

app.post('/opiniao', function(req , res){
    //var dados = req.body;

    var opiniao = new Opiniao();

        //aqui setamos os campos do usuario (que virá do request)
        opiniao.nome = req.body.nome;
        opiniao.opiniao = req.body.opiniao;
        opiniao.nota = req.body.nota;

        opiniao.save(function(error) {
            if(error)
                res.send(error);
                        
            res.json(opiniao);
        });
    

 
});

app.post('/cadastro', function(req , res){


    var profissao = new Profissao();

     
        profissao.nome = req.body.nome;
        profissao.profissao = req.body.profissao;
        profissao.telefone = req.body.telefone;
        profissao.site = req.body.site;

        profissao.save(function(error) {
            if(error)
                res.send(error);
                        
            res.json(profissao);
        });
    

 
});



app.get('/cadastro',function(req, res){

    var profissao = new Profissao();

   Profissao.find( function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

app.get('/arquiteto',function(req, res){

    var profissao = new Profissao();

   Profissao.find( ({profissao: "Arquiteto"}), function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

app.get('/Arquiteto',function(req, res){

    var profissao = new Profissao();

   Profissao.find( ({profissao: "Arquiteto"}), function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

app.get('/Eletricista',function(req, res){

    var profissao = new Profissao();

   Profissao.find( ({profissao: "Eletricista"}), function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

app.get('/eletricista',function(req, res){

    var profissao = new Profissao();

   Profissao.find( ({profissao: "Eletricista"}), function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

app.get('/Encanador',function(req, res){

    var profissao = new Profissao();

   Profissao.find( ({profissao: "Encanador"}), function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

app.get('/Pintor',function(req, res){

    var profissao = new Profissao();

   Profissao.find( ({profissao: "Pintor"}), function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

app.get('/Eletricista',function(req, res){

    var profissao = new Profissao();

   Profissao.find( ({profissao: "Eletricista"}), function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

app.get('/Encanador',function(req, res){

    var profissao = new Profissao();

   Profissao.find( ({profissao: "Encanador"}), function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

app.get('/Pedreiro',function(req, res){

    var profissao = new Profissao();

   Profissao.find( ({profissao: "Pedreiro"}), function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});

/*
app.get('/cadastro',function(req, res){

    var profissao = new Profissao();

   Profissao.find( ({profissao: "Arquiteto"}), function(err, records){
        if(err){
                res.send(error);
        }else{
                res.json(records);
        }
            })


});


*/










































////cod antigo////

/** 
const url = 'mongodb://renan:renan123@ds141902.mlab.com:41902/servico';

const dbName = 'servico';
 
// Use connect method to connect to the server
mongodb.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  app.post('/api', function(req, res){
    var dados = req.body;
    db.open(function(err, mongoclient){
        mongoclient.collection('postagens', function(err, collection){
            collection.insert(dados, function(err, records){
                if(err){
                    res.json({'status': 'erro'});
                }else{
                    res.json({'status': 'inclusao realizada com sucesso'});
                }
                mongoclient.close();
            });
        });
    });
});
  
 
  client.close();
});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }

app.listen(app.get('port'));

app.get('/', function(req, res){
  res.json({ mensaje: 'Un ejemplo de nodejs, express y Heroku'});
});

/*
app.post('/api', function(req , res){
    var dados = req.body;

    

  db.on(function(err, mongoclient){
        mongoclient.collection('pessoa', function(err, collection){
            collection.insert(dados, function(err , records){
                if(err){
                    res.json(err);
                }else{
                    res.json(records);
                }
                db.close();
            });
        });
    });
});
*/