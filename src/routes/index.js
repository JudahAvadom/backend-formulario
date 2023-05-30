const express = require("express");
const Router = express.Router();

Router.route("/save")
    .post((req,res)=>{
        res.json("Save form")
    })

module.exports = Router