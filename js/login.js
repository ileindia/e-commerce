

regBtn.addEventListener("click", () => { 


    if (password.value !== "" && email.value !== "" ){
        window.location.href="index.html";
        localStorage.setItem("usuario", email.value);
    } else {
        alert("Complete los campos");
    }
});
    
