// sw
// cruds 
// c => create
// r => retrive = display
// u => update
// d => delete
//  s => search

var nameInput= document.getElementById('productNameInput');
var priceInput = document.getElementById('productPriceInput');
var old=document.getElementById("old");
var cash=document.getElementById("cash")
var tablebody=document.getElementById("tablebody")
var numberr=document.getElementById("numberr")
let profit=document.getElementById("profit")
let deto=document.getElementById("deto")
// var categoryInput = document.getElementById('productCategoryInput');
// var descInput = document.getElementById('productDiscreption');
// var searchInput = document.getElementById('searchInput')


//------------------------------------------------------------------------


var productContainer=[]
// create
function createProduct(){
// local
var product={
 pname:nameInput.value,
//  category:categoryInput.value,
 price:calcprc(),
 quantaty:numberr.value
//  desc:descInput.value
}
productContainer.push(product)


clearForm()
dispaly()
}

//-------------------------------------------------------------------


// clear
function clearForm(){
nameInput.value ='';
// categoryInput.value='';
priceInput.value='';
numberr.value=1;
// descInput.value='';
}




//-------------------------------------------------------------------

function calcprc(){
  price=priceInput.value;
  qty=numberr.value;
return price*qty;
  
}

// display
function dispaly(){
var trs='';
for(var i=0;i<productContainer.length;i++){
trs +=
`<tr>
<th>${i+1}</th>
<td>${productContainer[i].pname}</td>
<td>${eval(productContainer[i].price)}</td>
<td>${productContainer[i].quantaty}</td>  
<th>
<button onclick="delte(${i})" class="btn btn-danger"><i class="fa-solid fa-trash">Delete</i></button>
</th>
</tr>`
}
document.getElementById('tablebody').innerHTML= trs
}

//------------------------------------------------------------------------------------------

// delete

function delte(index){
productContainer.splice(index,1);
total()
dispaly();
}

//------------------------------------------------------------------------------------------


function total()
{
    let pro=profit.value;
    var t=0;
    productContainer.forEach((product)=>
    {
       t+=eval(product.price)
    })
   document.getElementById("total").innerHTML="محمد حسن"
   document.getElementById("totall").innerHTML=deto.value+"<br />" +" البضاعه:"+"   " + t +"<br />" + "القديم : " + " " +" " + old.value + "<br />"+"واصل :"+" " +" " +cash.value+ "<br />" +"الفاتوره :"+ eval((eval(old.value)+t)-eval(cash.value))+"<br/>"+"عمر : "+ " " +" "+eval(Math.floor(pro*1/3))+"<br/>"+"الشركه :"+" "+" "+eval(Math.floor(pro*2/3))
}



//------------------------------------------------------------------------------------------



function removall()
{

 clearForm()
 productContainer=[];
 tablebody.innerHTML="";
 old.value=""
 numberr.value=1;
 cash.value=""
 document.getElementById("total").innerHTML=""
 document.getElementById("totall").innerHTML=""



}




//------------------------------------------------------------------------------------------
