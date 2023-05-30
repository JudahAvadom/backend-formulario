const { DataTypes } = require('sequelize');
const { sq } = require("../db")

const Usuarios = sq.define('usuarios', {
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING
    },
    pais: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports=Usuarios;