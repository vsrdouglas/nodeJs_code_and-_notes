const express = require('express');
const app = express();
const routers = require('./routes');
const {sequelize} = require('./models')

app.use(express.json());
app.use('/', routers);

sequelize.sync().then(()=>{
    console.log('Conexão estabelecida com o banco')
});




app.listen(3000,function(){
    console.log("Servidor rodando na porta 3000, na url localhost:3000");
});
