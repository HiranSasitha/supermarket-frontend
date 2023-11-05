document.addEventListener("DOMContentLoaded",function(){
getAllProduct();
getAllCategory();

});


const getAllProduct = () => {
    fetch("http://localhost:8080/product").then((response) =>{
        return response.json();
    }).then((data) => {
        let products = "";

        data.map((product)=>{

            products+= `<div  class="col-lg-3 col-sm-6 col-12">`;

           products+= `<div class="card mb-4" >`;
           
          products+=  `<div class="card-body">`;
          products+=   ` <h5 class="card-title">${product.name} <br><span class="badge bg-secondary">${product.categoryEntity?.name}</span> </h5>`;
          products+=   `<p class="card-text">RS. ${product.price}</p>`;
          products+=   `<a href="#" class="btn btn-primary">View</a>`;
          products+= `</div>`;
          products+= `</div>`;
          products+= `</div>`;
        
        });

        document.getElementById("products").innerHTML = products;
    }).catch((error) => {
        console.log(error);
    })
}

const getAllCategory = () =>{
    fetch("http://localhost:8080/categories").then((response) =>{
        return response.json();

    }).then((data) =>{
        let categorys = document.getElementById('categories');

        data.map((category)=>{
            const li = document.createElement('li');
            li.innerHTML = category.name;
            
            li.addEventListener('click', () => {
                getProductById(category.id);
              });
            li.style.cursor = 'pointer';
            li.style.marginBottom = `10px`;
            
             categorys.appendChild(li);
        });
    }) 
}

const getProductById = (id) => {

    console.log(id);

    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    fetch(`http://localhost:8080/categories/${id}/products`).then((response) =>{
        return response.json();
    }).then((data) => {
        console.log(data);
        let products = "";

        data.map((product)=>{

            products+= `<div  class="col-lg-3 col-sm-6 col-12">`;

           products+= `<div class="card mb-4" >`;
           
          products+=  `<div class="card-body">`;
          products+=   ` <h5 class="card-title">${product.name} <br><span class="badge bg-secondary">${product.categoryEntity?.name}</span> </h5>`;
          products+=   `<p class="card-text">RS. ${product.price}</p>`;
          products+=   `<a href="#" class="btn btn-primary">View</a>`;
          products+= `</div>`;
          products+= `</div>`;
          products+= `</div>`;
        
        });

        productsDiv.innerHTML = products;
    }).catch((error) => {
        console.log(error);
    })

}