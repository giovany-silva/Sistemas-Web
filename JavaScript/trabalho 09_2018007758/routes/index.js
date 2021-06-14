var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET newuser page. */
router.get('/newuser', function (req, res, next) {
    res.render('newuser', { title: 'New User' });
});

/* GET newuser page. */
router.get('/consultauser', function (req, res, next) {
    res.render('consultauser', { title: 'Consulta User' });
});

/* POST userlist page. */
router.get('/userlist', function(req, res) {
    var db = require("../db");
    
    var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Users.find({}).lean().exec(
       function (e, docs) {
           res.render('userlist', { "userlist": docs });
       });
});
/* POST userlist page. */
router.post('/consultaUser', function(req, res) {
    var db = require("../db");
    var userName = req.body.username;
    var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Users.find({username: userName}).lean().exec(
       function (e, docs) {
           res.render('userlist', { "userlist": docs });
       });
});



/* GET newuser page. */
router.get('/newuser', function (req, res, next) {
    res.render('newuser', { title: 'New User' });
});
/* GET deleteuser page. */
router.get('/deleteuser', function (req, res, next) {
    res.render('deleteuser', { title: 'Delete User' });
});

/* GET updateuser page. */
router.get('/updateuser', function (req, res, next) {
    res.render('updateuser', { title: 'Update User' });
});

/* POST to Add User Service */
router.post('/adduser', function (req, res) {

    var db = require("../db");
    var userName = req.body.username;
    var userCpf = req.body.userCpf;
    //alert(userCpf);

    var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    var user = new Users({ username: userName, cpf: userCpf });
    user.save(function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Post saved");
            res.redirect("userlist");
        }
    });
});
/* POST to Remove User Service */
router.post('/deleteUser', function (req, res) {

    var db = require("../db");
    var userName = req.body.username;
    var userCpf = req.body.userCpf;
    //alert(userCpf);

    var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    //var user = new Users({ username: userName, cpf: userCpf });
    Users.remove({ cpf: userCpf, username: userName},function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Deleted");
            res.redirect("userlist");
        }
    });
});
/* POST to Update User Service */
router.post('/updateUser', function (req, res) {

    var db = require("../db");
    var userName = req.body.username;
    var userCpf = req.body.userCpf;

    var userName2 = req.body.username2;
    var userCpf2 = req.body.userCpf2;
   
    const filtro = { username: userName, cpf: userCpf };
    const update = { username: userName2, cpf: userCpf2 };

    var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
   
   // var user = new Users({ username: userName, cpf: userCpf });
    Users.update(filtro,update,function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Updtaded");
            res.redirect("userlist");
        }
    });
});

module.exports = router;
