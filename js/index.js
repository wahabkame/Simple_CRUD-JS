
var arrayName;
if(localStorage.getItem("ourProduct") == null)
{
    arrayName = [];
}else
{
    arrayName =JSON.parse(localStorage.getItem("ourProduct"));
    displayProduct();
}
var inps = document.getElementsByClassName("form-control");

function addProduct()
{
   var name = document.getElementById("userName").value ;
   var salary = document.getElementById("userSalary").value ;
   var model = document.getElementById("userModel").value ;
   var desc = document.getElementById("userDesc").value ;
   
   var product = 
   {
       nameOne:name,
       nameTwo:salary,
       nameThree:model,
       nameFour:desc
   };

   arrayName.push(product);
   localStorage.setItem("ourProduct",JSON.stringify(arrayName));
   displayProduct();
   reuse();
   
}

function displayProduct()
{
    var temp = "";
    for(var i = 0 ; i < arrayName.length ; i++)
    {
        temp +=`<div class="col-md-3">
        <div class="products">
            <img class="img-fluid" src="images/2.jpg">
            <h2>`+arrayName[i].nameOne+`<span  class="ml-3 badge badge-primary">`+arrayName[i].nameThree+`</span></h2>
            <p>`+arrayName[i].nameFour+`</p>
            <h2 class="sal bg-danger">`+arrayName[i].nameTwo+`</h2>
            <button class="btn btn-outline-danger btn-sm" onclick="updateProduct(`+i+`)">Update</button>
            <button class="btn btn-outline-warning btn-sm" onclick="deleteProduct(`+i+`)">Delete</button>
        </div>
    </div>`;
    }
    document.getElementById("productsRow").innerHTML = temp ;
}


function reuse()
{
    for(var i = 0 ; i < inps.length ; i++)
    {
        inps[i].value="";
    }

}

function deleteProduct(ind)
{
    for(var i = 0; i < arrayName.length; i++)
    {
        var deleted = arrayName.splice(ind,1);
        localStorage.setItem("ourProduct",JSON.stringify(arrayName));
        displayProduct();
    }
}

function searchProduct(term)
{
    temp ="";
    for(var i = 0 ; i < arrayName.length; i++)
    {
        if(arrayName[i].nameOne.toLowerCase().includes(term.toLowerCase()))
        {
            temp +=`<div class="col-md-3">
            <div class="products">
                <img class="img-fluid" src="images/2.jpg">
                <h2>`+arrayName[i].nameOne+`<span  class="ml-3 badge badge-primary">`+arrayName[i].nameThree+`</span></h2>
                <p>`+arrayName[i].nameFour+`</p>
                <h2 class="sal bg-danger">`+arrayName[i].nameTwo+`</h2>
                <button class="btn btn-outline-danger btn-sm" onclick="Update(`+i+`)">Update</button>
                <button class="btn btn-outline-warning btn-sm" onclick="deleteProduct(`+i+`)">Delete</button>
            </div>
        </div>`;
        }
    }
    document.getElementById("productsRow").innerHTML = temp ;
}

function updateProduct(ind)
{
    var name = document.getElementById("userName").value ;
    var salary = document.getElementById("userSalary").value ;
    var model = document.getElementById("userModel").value ;
    var desc = document.getElementById("userDesc").value ;

    var index = getObjectIndex(arrayName, name, salary, model);

    if(index !== false) {
        // Update the quantity in the same element
        arrayName[index].desc = desc;
    } else {
        // Add the element in the array
        arrayName.push({
            nameOne:name,
            nameTwo:salary,
            nameThree:model,
            nameFour:desc
        });
    }


}