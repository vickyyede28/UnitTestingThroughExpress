const express = require("express")
const express = require("./mochawesome-report")

const app = express()

app.get("/",(req,res)=>{
    res.send(`Hello Universe M`);
})

app.use (require("./routes/userroute"))

// app.use(express.json())

app.listen(1111,()=>{
    console.log(` Server is Running on http://localhost:${1111}`);
})

module.exports = app;