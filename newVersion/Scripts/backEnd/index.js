const express = require('express');
const server = express();
const country = require('/Users/franciscojose/Documents/GitHub/Banco/newVersion/Scripts/data/country.json')

server.get('/usuario', (req, res) =>{
    return res.json({country})
})

function showScreen(){
    
}

server.listen(3000, ()=>{
    console.log("servidor esta funcionando...")
})