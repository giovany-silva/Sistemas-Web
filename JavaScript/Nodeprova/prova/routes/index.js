var getJSON = require('get-json')//é necessário dar um npm install get-json
var express = require('express');
var router = express.Router();
var $ = require("jquery");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST cidadelist page. */
router.get('/cidadelist', function(req, res) {
    var db = require("../db");
    
    var Cidades = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Cidades.find({}).lean().exec(
       function (e, docs) {
           res.render('cidadelist', { "cidadelist": docs });
       });
});
/* GET consultacidade page. */
router.get('/consultacidade', function(req, res) {
   res.render('consultacep', { title: 'Consultar Cidade' });
});
/* GET addcidade page. */
router.get('/addcidade', function(req, res) {
   res.render('addcidade', { title: 'Consulta Cidade' });
});

/* POST to Add cidade */
router.post('/addCidade', function (req, res) {

    var db = require("../db");
    var Cidade = req.body.cidade;
    var Temp = req.body.temp;
        

    var Cidades = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    var cidade = new Cidades({ cidade: Cidade, temp: Temp });
    cidade.save(function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Post saved");
            res.redirect('cidadelist');
        }
    });
});

/* POST consultacep page. */
router.post('/consultacep', function(req, res) {
    var db = require("../db");
    var cep = req.body.cep;

    
    getJSON("https://viacep.com.br/ws/" + cep + "/json/")
    .then(function(resposta) {
      // console.log(resposta);
       var cidades = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
      
       const atributos = {cidade : resposta.localidade};
       cidades.find(atributos).lean().exec(
       function (e, docs) {
	 if(!e){
           res.render('cidadelist', { "cidadelist": docs });
         }
	 else{
            //renderizar página de erro
	    res.render('erro');
	 }
       });
       
    }).catch(function(error) {
      console.log(error);
    });

    
    var cidades = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
   
});


module.exports = router;
