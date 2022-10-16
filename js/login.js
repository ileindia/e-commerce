

regBtn.addEventListener("click", () => { 


    if (password.value !== "" && email.value !== "" ){
        window.location.href="index.html";
        localStorage.setItem("usuario", email.value);
    } else {
        document.getElementById("emailAlert").innerHTML = `Ingresa un email válido.`;
        document.getElementById("passwordAlert").innerHTML = `La contraseña debe tener entre 4 y 20 caracteres.`;
      
    }
});
    
