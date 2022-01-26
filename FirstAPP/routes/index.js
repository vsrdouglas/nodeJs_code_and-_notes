const express = require('express')
const router = express.Router()

const usersRouter = require('./users');
const servisesRouter = require('./servises');

router.get('/', function(req, res){
    res.send('Inicio do server!');

});

router.use('/users', usersRouter)
router.use('/servises', servisesRouter)

module.exports = router;




