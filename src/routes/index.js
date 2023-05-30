const express = require("express");
const Router = express.Router();
const Usuarios = require("../models/Usuarios")

Router.route("/lista")
    .get(async(req,res)=>{
        const list = await Usuarios.findAll();
        res.json(list)
    })

Router.route("/usuario")
    .post(async(req,res)=>{
        // Guardar usuario
        const {nombre,apellido,pais} = req.body
        console.log(req.body);
        Usuarios.create({
            nombre,
            apellido,
            pais
        })
        res.json("User saved!")
    })
    .delete(async(req,res)=>{
        // Borrar usuario
        const { usuario_id } = req.body
        Usuarios.destroy({
            where:{
                usuario_id
            }
        })
        res.json("User deleted!")
    })

module.exports = Router