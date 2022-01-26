const express = require('express')
const router = express.Router()


var listaUsers = [];
module.exports = router;

router.get('/', function(req, res){
    res.json(listaUsers);
});

router.post('/', (req, res) =>{
    var dadosUsers = req.body;
    console.log(dadosUsers);
    listaUsers.push(dadosUsers);
});
