/*localStorage.setItem();

document.getElementById("email").innerHTML = localStorage.getItem();*/
const inputName = document.getElementById("nomb")
const inputSurName = document.getElementById("surName")
const inputEmail = document.getElementById("useremail")
const inputName2 = document.getElementById("nomb2")
const inputSurName2 = document.getElementById("surName2")
const inputTel = document.getElementById("tel")
const emailUser = localStorage.getItem("usuario")

if (localStorage.getItem("usuario")) {
    document.getElementById("useremail").value = localStorage.getItem("usuario");
}

const btnGuardar = document.getElementById("fin");
const formulario = document.getElementById("formu");

formulario.addEventListener("submit", (evento) => {
    formulario.classList.add("was-validated");
    evento.preventDefault();
    if (formulario.checkValidity()){
        let user = { mail: inputEmail.value, nombre: inputName.value, apellido: inputSurName.value, snombre: inputName2.value, sapellido: inputSurName2.value, telefono: inputTel.value }
        localStorage.setItem(inputEmail.value, JSON.stringify(user))
        
    }
})

if (localStorage.getItem(emailUser)){
    const usuario = JSON.parse(localStorage.getItem(emailUser))
    inputName.value = usuario.nombre
    inputName2.value = usuario.snombre
    inputSurName.value = usuario.apellido
    inputSurName2.value = usuario.sapellido
    inputTel.value = usuario.telefono
}



