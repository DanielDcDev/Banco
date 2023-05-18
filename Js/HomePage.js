const Cadaster = () => {
    window.location.replace("/html/CadasterPage.html");
};
const Login = () => {
    window.location.replace("/html/LoginPage.html");
};
const AboutUs = () => {
    window.location.replace("/html/AboutUSPage.html");
};


//header
document.getElementById('Login')
        .addEventListener('click', Login);
document.getElementById('AboutUS')
        .addEventListener('click', AboutUs);
//main
document.getElementById('ButtonCadaster')
        .addEventListener('click', Cadaster);
document.getElementById('ButtonLogin')
        .addEventListener('click', Login);