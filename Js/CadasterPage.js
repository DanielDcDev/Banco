'use strict'
const getLocalStorage = () => JSON.parse(localStorage.getItem('banco')) ?? [];
const setLocalStorage = () => localStorage.setItem("bd_cliente", JSON.stringify(banco));

const createClient = (cliente)=>{
    const banco = getLocalStorage();
    banco.push (cliente);
    setLocalStorage(banco);
}
const isValidFIelds = () => {
    return document.getElementById('form').reportValidity();
} 

const saveClient = () =>{
    if (isValidFIelds()){
const cliente = {
    name: document.getElementById("name").value,
    gender: document.getElementsByClassName("Gender").value,
    login: document.getElementById("login").value,
    password: document.getElementById("password").value,
    Cpassword: document.getElementById("Confirmpassword").value,
    email: document.getElementById("email").value,
    reservationEmail: document.getElementById("ReservationEmail").value,
    date: document.getElementById("date").value

}
const index = document.getElementById('name').dateset.index;
if(index =="new"){
    createClient(cliente);
}
}


}



function Link(){
    saveClient();
    //window.location = '/html/loginPage.html';
}
