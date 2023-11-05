document.addEventListener("DOMContentLoaded",function(){
    getAllCategory();
});

const getAllCategory = () =>{
    fetch("http://localhost:8080/categories").then((response) =>{
        return response.json();

    }).then((data) =>{
        let categorys = document.getElementById('categoryId');

        data.map((category)=>{
            const option = document.createElement('option');
            option.value = category.id;
            option.text = category.name;
            categorys.appendChild(option);
        });
    }) 
}

const createProduct = (event) =>{

    event.preventDefault();
  

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let qty = document.getElementById("qty").value;
    let categoryId = document.getElementById("categoryId").value;
    let error = document.getElementById("error");
    let price_reges = /^(?:(?!0$)\d+(\.\d+)?|0\.\d*[1-9]\d*)$/;
    let qty_reges =/^[1-9]\d*$/;

    // validation code

    if(!price_reges.test(price)){
        error.innerHTML = "Price is not valid";
    }else if (!qty_reges.test(qty)){
        error.innerHTML = "qty is not valid"
    }else{

    

    let data = {
        "name": name,
        "price": price,
        "qty":qty,
        "categoryId":categoryId
    }

    fetch("http://localhost:8080/product",{
        method : 'POST',
        body : JSON.stringify(data),
        headers :{
            "content-type" : "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        window.location.href = "file:///G:/ijse/html/spring%20boot/frontEnd%20SuperMarket/product%20app/index.html"
    }).catch((error) =>{
        console.log(error);
    })

}

}