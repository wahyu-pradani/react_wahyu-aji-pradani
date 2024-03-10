const btn_submit = document.querySelector('#btn-submit');
const myTable = document.getElementById('listData');



btn_submit.addEventListener("click", (e) => {
    e.preventDefault();
    var productName = document.getElementById('product_name').value;
    var productCategory = document.getElementById('product_category').value;
    var productImage = document.getElementById('AddPhoto').value;
    var productFreshness = $('input[name="flexRadioDefault"]:checked').val();
    var productDesc = document.getElementById('Add-Description').value;
    var productPrice = document.getElementById('Product_Price').value;
    productImage="Default Image";
    //array objek 
    var dataProduct = [{
        name: productName,
        category: productCategory,
        image: productImage,
        listProduct: productFreshness,
        desc: productDesc,
        price: productPrice
    }];

    //read data
    function displayData(){
        for (var i=0; i<dataProduct.length; i++){
            var no =i+1; 
            var row = `<tr class="text-center">
                        <td>${myTable.rows.length + 1}</td>
                        <td>${dataProduct[i].name}</td>
                        <td>${dataProduct[i].category}</td>
                        <td>${dataProduct[i].image}</td>
                        <td>${dataProduct[i].listProduct}</td>
                        <td>${dataProduct[i].desc}</td>
                        <td>${dataProduct[i].price}</td>
                    </tr>`
            myTable.innerHTML +=row
        }
    }
    displayData();
    //insert data
    function insertData(){
        if (productName && productCategory && productImage && productFreshness && productDesc && productPrice){
            let id = dataProduct.length +1;
            dataProduct.push({name:productName, category:productCategory, image:productImage, listProduct:productFreshness, desc:productDesc, price:productPrice, id:id})
            displayData();
            clearItems();
        }
    }
    function clearItems(){
        document.getElementById('product_name').value="";
        document.getElementById('product_category').value="";
        document.getElementById('AddPhoto').value="";
        document.getElementById('Add-Description').value="";
        document.getElementById('Product_Price').value="";
        productFreshness = "";
    }
    
});