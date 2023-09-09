import express from "express"
const app = express()
const port = "3000"

app.get('/',(req,res)=>{
    res.send("<h1>This is Home page</h1>")
})

app.get('/about',(req,res)=>{
    res.send("<h1>This is about section</h1>")
})

app.get('/contact',(req,res)=>{
    res.send("<h1>Contact us</h1>")
})

app.listen(port,()=>{
    console.log(`The server is running ${port}`)
})