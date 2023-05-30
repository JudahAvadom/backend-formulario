const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const IndexRouter = require("./routes/index")

const PORT = process.env.PORT || 4000;

app.use(express.json())

app.use("/", IndexRouter)

app.listen(PORT, ()=>{
    console.log(`Server in port ${PORT}`);
})