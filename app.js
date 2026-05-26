const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("Jenkins Docker CI/CD Working!")
})

app.listen(3000)
