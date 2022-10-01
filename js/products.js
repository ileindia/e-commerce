 
let url = "https://japceibal.github.io/emercado-api/cats_products/" +localStorage.getItem("catID") +".json";
const ORDEN_ASC_PRC = "precio";
const ORDEN_DESC_PRC = "-precio";
const ORDEN_MAS_VEND = "Cant.";
let productsArray = [];
let actualCriterio= undefined;
let prcMin = undefined;
let prcMax = undefined;
let filtroArray = [];


function prodId(id){
    localStorage.setItem("pID", id)
    window.location="product-info.html"
}

    function showList(array){
        let tarjList = "";
    
        for(let i = 0; i < array.length; i++){ 
            let products = array[i];
            tarjList += `
            <div class="list-group-item list-group-item-action" onclick ="prodId(${products.id})">
                <div class="row">
                    <div class="col-3">
                        <img src="` + products.image + `" alt="product image" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                            <h4>`+ products.name + " - " + products.currency + " " + products.cost +`</h4> 
                            <p> `+ products.description +`</p> 
                            </div>
                            <small class="text-muted">` + products.soldCount + ` artículos</small> 
                        </div>
    
                    </div>
                </div>
            </div>
            `
 
        } 
        document.getElementById("container").innerHTML=tarjList;
    }
  
function sortProducts(criterio, array){
    let result = [];
    if (criterio === ORDEN_ASC_PRC)
    {
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return 1; }
            if ( a.cost < b.cost ){ return -1; }
            return 0;
        });
    }else if (criterio === ORDEN_DESC_PRC){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criterio === ORDEN_MAS_VEND){
        result = array.sort(function(a, b) {
            
            if ( a.soldCount > b.soldCount ){ return -1; }
            if ( a.soldCount < b.soldCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

    function sortAndShowProducts(sortCriterio, prdcArray){
    actualCriterio = sortCriterio;
    if(prdcArray != undefined){
        productsArray = prdcArray;
    }
    productsArray = sortProducts(actualCriterio, productsArray);

    showList(productsArray);
}

document.addEventListener("DOMContentLoaded", async ()=> {
        let datos = await fetch(url); 
        datos = await datos.json();
        productsArray = datos.products;
        document.getElementById("cat").innerHTML=datos.catName
        showList(datos.products);
    
        document.getElementById("sortAsc").addEventListener("click", function(){
            sortAndShowProducts(ORDEN_ASC_PRC);
        });
    
        document.getElementById("sortDesc").addEventListener("click", function(){
            sortAndShowProducts(ORDEN_DESC_PRC);
        });
    
        document.getElementById("sortByCount").addEventListener("click", function(){
            sortAndShowProducts(ORDEN_MAS_VEND);
        });

        document.getElementById("clearRangeFilter").addEventListener("click", function(){
            document.getElementById("rangeFilterCountMin").value = "";
            document.getElementById("rangeFilterCountMax").value = "";
    
            prcMin = undefined;
            prcMax = undefined;
            
            showList(productsArray)
        });

        document.getElementById("rangeFilterCount").addEventListener("click", function(){
            prcMin = document.getElementById("rangeFilterCountMin").value;
            prcMax = document.getElementById("rangeFilterCountMax").value;
            filtroArray = productsArray;

            if ((prcMin != undefined) && (prcMin != "") && (prcMin >= 0)){
                filtroArray = filtroArray.filter(product=>product.cost >= prcMin);
            }else{
                prcMin = undefined;
            }
            
            if ((prcMax != undefined) && (prcMax != "") && (prcMax >= 0)){
                filtroArray = filtroArray.filter(product=>product.cost <= prcMax);
            }else{
                prcMax = undefined;
            }
            
           showList(filtroArray)

        });


})    







