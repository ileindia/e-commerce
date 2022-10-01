
let infoId = localStorage.getItem("pID")
let urlProdInf = "https://japceibal.github.io/emercado-api/products/" + infoId + ".json"
let urlComent = "https://japceibal.github.io/emercado-api/products_comments/" + infoId + ".json"



document.addEventListener("DOMContentLoaded", async()=>{
        let datos = await fetch(urlProdInf); 
        datos = await datos.json();
        infoArray = datos;
        document.getElementById("container").innerHTML=`
        <h2>${infoArray.name}</h2>
        <hr>
        <h5>Precio</h5>
        <p>${infoArray.currency} ${infoArray.cost}</p>
        <h5>Descripción</h5>
        <p>${infoArray.description}</p>
        <h5>Categoria</h5>
        <p>${infoArray.category}</p>
        <h5>Cantidad de vendidos</h5>
        <p>${infoArray.soldCount}</p>
        <h5>Imagenes ilustrativas</h5>
        <div class="row" id="contImg">
        </div>
        `
        for(let img of infoArray.images){
            document.getElementById("contImg").innerHTML+=`
            <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="xxxxx">
            </div>
            `
        }

        let comm = await fetch(urlComent); 
        comm = await comm.json();
        comentArray = comm;
        for(let coments of comentArray){
        document.getElementById("com").innerHTML+=`
        <li class="list-group-item">${coments.user} - ${coments.dateTime} -
        ${star(coments.score)} - 
        ${coments.description}</li>
        `
        }

        function star(score){
            let stars=""
            for(let i=0; i<5; i++){
                if(i<score){
                    stars+=`<span class="fa fa-star checked"></span>`
                }else{stars+=`<span class="fa fa-star"></span>`
            }
            }return stars
        }

        let related = await fetch(urlProdInf);
        related = await related.json();
        infoArray = related;
        document.getElementById("relacion").innerHTML=`
        <h5>Productos relacionados</h5>
        <br>
        <div class="row" id="imgRelac" onclick="">
        </div>
        `
        for(let rel of infoArray.relatedProducts){
            document.getElementById("imgRelac").innerHTML+=`
            <div class="card list-group-item list-group-item-action cursor-active" style="width: 18rem; " onclick="newProd(${rel.id})">
            <img src="${rel.image}" class="card-img-top" alt="xxxxx">
            <p>${rel.name}</p>
            </div>
            `
        }
})
 
function newProd(id){
    localStorage.setItem("pID", id)
    window.location="product-info.html"
}

    
    