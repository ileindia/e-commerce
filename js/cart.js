let urlCart = "https://japceibal.github.io/emercado-api/user_cart/25801.json";

document.addEventListener("DOMContentLoaded", async()=>{
    let car = await fetch(urlCart); 
    car = await car.json();
    cartArray = car.articles;
    for(let car of cartArray){
    document.getElementById("carro").innerHTML=`
            <tr>
                <td><img src="${car.image}" class"img-thumbnail" alt="xx" style="width: 100px;"></td>
                <td>${car.name}</td>
                <td>${car.currency} <span id="precio">${car.unitCost}</span></td>
                <td><input class="form-control" type="number" style="width: 100px"; oninput="subTotal()" id="cant"></td>
                <td>${car.currency} <span id="stotal"></span></td>
            </tr>
    `
    }
    ;
})

function subTotal(){
  let can = document.getElementById("cant").value;
  let prc = document.getElementById("precio").innerHTML;
  document.getElementById("stotal").innerHTML = (parseFloat(can) * parseFloat(prc));

}
