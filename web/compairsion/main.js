for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
   
}

for (var i = 1; i < data.length; i++) {
    
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${data[i].title}</option>
    `;
}
for (var i = 1; i < count.length; i++) {
    
    document.getElementById("select3").innerHTML += `
    <option value="${i}">${count[i].title}</option>
    `;
}

function item1(a) {
    {
        document.getElementById("img1").src = product[a].image
        document.getElementById("price1").innerHTML = "PKR " + product[a].price
        document.getElementById("desc1").innerHTML = product[a].description
        document.getElementById("brand1").innerHTML = product[a].brand

    } 
}

function item2(a) {
   {
        document.getElementById("img2").src = data[a].image
        document.getElementById("price2").innerHTML = "PKR " + data[a].price
        document.getElementById("desc2").innerHTML = data[a].description
        document.getElementById("brand2").innerHTML = data[a].brand
    } 


}
function item3(a) {
   {
        document.getElementById("img3").src = count[a].image
        document.getElementById("price3").innerHTML = "PKR " + count[a].price
        document.getElementById("desc3").innerHTML = count[a].description
        document.getElementById("brand3").innerHTML = count[a].brand
    } 


}