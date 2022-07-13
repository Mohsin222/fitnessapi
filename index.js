const express= require('express')
const cors= require('cors')
const port = process.env.PORT || 3000

const app= express()

app.use(cors())


const apiData =require('./data.json')

app.get('/',(req,res)=>{
    res.send('Hello live')
})

app.get('/services',(req,res)=>{
    res.send(apiData)
})

app.listen(port,()=>{
    console.log(`Server running at  ${port}`)
})

