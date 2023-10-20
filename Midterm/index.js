
fetch("./data.json")
.then(function (response) {
return response.json();
})
.then(function (data) {
appendData(data);
})
.catch(function (err) {
console.log('error:' + err);
})

function appendData(data) 
{
    let sName = document.getElementById("sName");
    let sDesc = document.getElementById("sDesc");
    let sPrice = document.getElementById("sPrice");

    
        let name = data.fruits[0].name;
        let desc = data.fruits[0].Description;
        let price = data.fruits[0].Price;

        let p1 = document.createElement("span");
        let p2 = document.createElement("span");
        let p3 = document.createElement("span");

        p1.innerHTML = `${name}`
        sName.appendChild(p1);
        
        p2.innerHTML = `${desc}`
        sDesc.appendChild(p2);
        
        p3.innerHTML = `${price}`
        sPrice.appendChild(p3);

}