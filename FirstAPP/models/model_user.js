const { DataTypes } = require("sequelize/dist");

const user = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        nome: {
            type: DataTypes.STRING
        },
        contato: {
            type: DataTypes.STRING
        },
        endereco:{
            type: DataTypes.STRING
        },
        isAdmin:{
            type: DataTypes.BOOL
        },
        servisesActive:{
            type: DataTypes.BOOL
        }
    },
    {
        tableName: 'user'
    });

    return User;

    module.exports = user;
}