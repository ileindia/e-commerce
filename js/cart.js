let urlCart = "https://japceibal.github.io/emercado-api/user_cart/25801.json";


document.addEventListener("DOMContentLoaded", async()=>{
    let car = await fetch(urlCart); 
    car = await car.json();
    cartArray = car.articles;
    for(let car of cartArray){
    document.getElementById("carro").innerHTML=`
            <tr>
                <td><img src="${car.image}" class="img-thumbnail" alt="xx" style="width: 100px;"></td>
                <td>${car.name}</td>
                <td>${car.currency} <span id="precio">${car.unitCost}</span></td>
                <td><input class="form-control" type="number" style="width: 100px;" value="1" oninput="subTotal()" id="cant"></td>
                <td>${car.currency} <span class="stot" id="stotal">${car.unitCost}</span></td>
            </tr>
    `
    }
    ;
   totalCost()

})

function subTotal(){
  let can = document.getElementById("cant").value;
  let prc = document.getElementById("precio").innerHTML;
  document.getElementById("stotal").innerHTML = (parseFloat(can) * parseFloat(prc));
  totalCost()

}

function totalCost(){
    let subTotalCost = document.getElementById("costoSub");
    let envioCost = document.getElementById("costoEnv");
    let costoTot = document.getElementById("total");
    let subTotalVariable = document.getElementById("stotal").innerText;
    
    let porcentaje = document.querySelector("input[name='env']:checked").value
    let subTotalCostShow = (subTotalVariable);
    let envioCostShow = Math.round(parseFloat(porcentaje) * parseInt(subTotalVariable));
    let costoTotShow = String(envioCostShow + parseInt(subTotalVariable));

    subTotalCost.innerHTML = "USD " + subTotalCostShow;
    envioCost.innerHTML = "USD " + envioCostShow;
    costoTot.innerHTML = "USD " + costoTotShow;
}


  function modalDisabled(){
    if((tarjeta.checked)){
      numCuenta.disabled = true;
      numTarjeta.disabled = false;
      codSeguridad.disabled = false;
      vencim.disabled = false;
      document.getElementById("noSelec").innerHTML=`Tarjeta de credito`;
    }

    if ((transfer.checked)){
      numCuenta.disabled = false;
      numTarjeta.disabled = true;
      codSeguridad.disabled = true;
      vencim.disabled = true; 
      document.getElementById("noSelec").innerHTML=`Transferencia bancaria`;
    }
    
    selecPago.classList.remove("is-invalid")

  }

  const btnGuardar = document.getElementById("fin");
  const formulario = document.getElementById("envioForm");
  
  formulario.addEventListener("submit",(evento)=>{
      formulario.classList.add("was-validated");  
      if ((tarjeta.checked) || (transfer.checked)){
        selecPago.classList.remove("is-invalid")
      }else{
        selecPago.classList.add("is-invalid")
      }
      if (formulario.checkValidity()){
        alert("Has comprado con exito")
      }else{
        evento.preventDefault()
      }


  })
    



