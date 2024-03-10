const formAll = document.getElementById('form-field');
const prodName = document.getElementById('product_name');
const errorMessage = document.getElementById("invalid-feedback");
var pattern = /[#@{}]/;
const productPrice = document.getElementById('Product_Price');

  
function ProductName (){
    if (pattern.test(prodName.value)){
        errorMessage.textContent = "Name must not contain symbols";
        prodName.style.borderColor = "red";
    }
    else if (prodName.value.length > 10 && prodName.value.length <= 25){
        errorMessage.textContent = "name product must not exceed 25 characters";
        prodName.style.borderColor = "red";
    }
    else if (prodName.value === "" || prodName.value === null){
        errorMessage.textContent = "Product name cannot be empty";
        prodName.style.borderColor = "red";
    }
    else {
        errorMessage.textContent = "";
    }
    
}

function ProductPrice (){
    if (productPrice.value === null || productPrice.value === ""){
        errorMessage.textContent ="Price can't empty.";
    }
    else {
        errorMessage.textContent = "";
    }
}

prodName.addEventListener("input", ProductName);

productPrice.addEventListener("input", ProductPrice);


formAll.addEventListener("submit", function (event) {

        if (prodName.value ==="" || productPrice.value ==="" || prodName.value ===null || productPrice.value ===null){
            errorMessage.textContent = "Please enter field product name and price all";
            event.preventDefault();
        }
        else if (prodName.value.trim()==="" ){
            event.preventDefault();
            return; 
        }
        
});

