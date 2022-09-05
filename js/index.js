

regBtn.addEventListener("click", () => { 


    if (password.value !== "" && email.value !== "" ){
        window.location.href="frontpage.html";
        localStorage.setItem("usuario", email.value);
    } else {
        alert("Complete los campos");
    }
});
    
if (localStorage.getItem("usuario")){
    window.location.href="frontpage.html";
}
