// let product=[];
// let form=document.querySelector(".myform");
// let name=document.querySelector(".pname");
// let id=document.querySelector(".pid");
// let quantity=document.querySelector(".pquantity");
// let price=document.querySelector(".pprice");

// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     let newproduct={pname:name.value,pid:id.value,pquantity:quantity.value,pprice:price.value};
//     let productdata=localStorage.getItem("product");
//     if(productdata.length>0)
//     {
//         productdata=JSON.parse(productdata);
//     }
//     else{
//         productdata=[];
//     }
//     productdata.push(newproduct);
//     localStorage.setItem("product",JSON.stringify(productdata));

// })

// Initialize the product array from local storage or as an empty array
let product = JSON.parse(localStorage.getItem("product")) || [];

let form = document.querySelector(".myform");
let name1 = document.querySelector(".pname");
let id = document.querySelector(".pid");
let quantity = document.querySelector(".pquantity");
let price = document.querySelector(".pprice");

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    
    // Create a new product object from the form input values
    let newProduct = {
        pname: name1.value,
        pid: id.value,
        pquantity: quantity.value,
        pprice: price.value
    };

    // Push the new product into the product array
    product.push(newProduct);

    // Store the updated product array in local storage
    localStorage.setItem("product", JSON.stringify(product));

    // Clear the form inputs
    name1.value = "";
    id.value = "";
    quantity.value = "";
    price.value = "";

    // Optionally, you can update the UI or perform any other actions here
});
