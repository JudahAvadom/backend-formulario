const { Sequelize } = require('sequelize');
const dotenv = require("dotenv").config();

const DATABASE = process.env.DATABASE || 'formulario'
const USER_DB = process.env.USER_DB || 'judah'
const PASSWORD_DB = process.env.PASSWORD_DB || 'Trapo99.'

const sq = new Sequelize(DATABASE, USER_DB, PASSWORD_DB, {
    host: 'localhost',
    dialect: 'postgres'
});

const ConnectDB = async() => {
    try {
        await sq.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { sq, ConnectDB }