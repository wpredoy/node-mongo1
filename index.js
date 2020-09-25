const express = require("express")

const name = express()

name.get("/", (req, res)=> {
    res.send("Thank you very much")
})

name.listen(3000, ()=>console.log("Listenting to port 3000"))