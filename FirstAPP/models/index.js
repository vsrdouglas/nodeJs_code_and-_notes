const sequelize = require('../config/sequelize')
const User = require('./model_user')
const Sequelize = require('sequelize')
const user = User(sequelize, Sequelize.DataTypes)

const db = {
    user,
    sequelize
}
module.exports = db;