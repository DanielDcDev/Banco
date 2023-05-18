'use strict'
//crud 

const tempClient = {
    name: "Daniel",
    gender: "masculino",
    login: "DcDev",
    password: "33931253",
    CPassword: "33931253",
    Email: "Danieldcdev@gmail.com",
    CEmail: "Danieldcdev@gmail.com",
    DateBorn: "06/10/2002"
}

const createClient = (client) => {
    localStorage.setItem("dbCliente", JSON.stringify(client))
}

const IsValidfields = (client) => {
    if(tempClient.password.value === tempClient.CPassword.value){
        if(tempClient.Email.value === tempClient.CEmail.value){
            createClient();
        }
    }else{
        Erro()
    }
}
const Erro = () => {
    window.alert('Algum Campo está errado');
} 
document.getElementById('createCont')
        .addEventListener('click', IsValidfields);