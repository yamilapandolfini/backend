const express = require ('express');
const fs = require('fs');


const app = express();

let contadoritems = 0;
let contadoritemrandom = 0;

const PORT =8080;
const server = app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send("Main Page");
});

app.get('/items',(req,res)=>{
    let productList = fs.readFileSync('./productos.txt','utf-8');
    let jsonList = JSON.parse(productList)
    let response = {
        "items": jsonList,
        "cantidad": jsonList.length
    }
    res.send(response)
    contadoritems = contadoritems + 1;

})



app.get('/items-random',(req,res)=>{
    let data = fs.readFileSync('./productos.txt','utf-8');
    let jsondata = JSON.parse(data)
    let totalitems = jsondata.length -1;
    let random = parseInt(Math.random()*(totalitems-0+1)+0)
    let randomitem = jsondata[random].title;
    let show ={
        "item": randomitem
    }
    res.send(show)
    contadoritemrandom = contadoritemrandom + 1;

})

app.get('/visitas',(req,res)=>{
    let contadores = {
        "items": contadoritems,
        "item-random": contadoritemrandom
    }
    
    let visitas = {
        visitas: contadores,
    }
    res.send(visitas)
})
