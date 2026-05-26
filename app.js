const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("Webhook Auto Trigger Working!")
})

app.listen(3000)
