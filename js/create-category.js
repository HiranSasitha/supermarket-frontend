document.addEventListener("DOMContentLoaded",function(){

});

const createCategory = (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value ;

    let data = {"name":name}

    fetch("http://localhost:8080/categories",{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
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


