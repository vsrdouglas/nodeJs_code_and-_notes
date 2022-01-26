const express = require('express')
const router = express.Router()



var listaservises = [];
module.exports = router;

router.get('/', function(req, res){
    res.json(listaservises);
});

router.post('/', (req, res) =>{
    var dadosservises = req.body;
    console.log(dadosservises);
    listaservises.push(dadosservises);
    console.log("Serviço registrado com sucesso");
});
