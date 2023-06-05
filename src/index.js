const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors")
const { ConnectDB } = require("./db");

const IndexRouter = require("./routes/index")

const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'https://lemon-glacier-0e51c7b10.3.azurestaticapps.net',
    optionsSuccessStatus: 200
}))
app.use(express.json())
app.use("/", IndexRouter)

ConnectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server in port ${PORT}`);
    })
})