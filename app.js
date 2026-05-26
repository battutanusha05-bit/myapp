const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("Automatic CI/CD Pipeline Success!")
})

app.listen(3000)
