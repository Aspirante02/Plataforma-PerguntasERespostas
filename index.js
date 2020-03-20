const express = require("express")
const app = express()
app.set("view engine","ejs")//Configura o EJS como template engine.
app.use(express.static('public')) //Configura o express para aceitar arquivos estáticos.

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/perguntar",(req,res)=>{
    res.render("perguntar")
})

app.listen(8080,(erro)=>{
    if(erro){
        console.log(erro)
    }else {
        console.log("Servidor iniciado com sucesso!")
    }
})