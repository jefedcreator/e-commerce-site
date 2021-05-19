const checkout = document.querySelector('.checkout');
const identifier = document.getElementById('s');
const button = document.getElementsByTagName('button');
console.log(button)

function popup(){
    if (checkout.style.display === "none") {
        checkout.style.display = "flex";
      } else {
        checkout.style.display = "none";
}
}

let products = [
                  {'number':1,
                  'item':'Samsung TV', 
                  'price':'#500,000',
                  'Quantity':1
                              },
                  {'number':2,
                  'item':'Pixel 4A',
                  'price':'#250,000',
                  'Quantity':1
                              },
                  {'number':3,
                  'item':'PS 5',
                  'price':'#350,000',
                  'Quantity':1
                              },
                  {'number':4,
                  'item':'Macbook Air',
                  'price':'#800,000',
                  'Quantity':1
                              },
                  {'number':5,
                  'item':'Apple Watch',
                  'price':'#100,000',
                  'Quantity':1
                              },
                  {'number':6,
                  'item':'AirPods',
                  'price':'#80,000',
                  'Quantity':1
                              }
]

// first add card button
function addfirstcart() {
  let stringCart= JSON.stringify(firstCart) /*convert fifthCart object to string*/
sessionStorage.setItem('item', stringCart) /*store "string" to sessionstorage*/
let objCart= JSON.parse(sessionStorage.getItem('item')) /*convert string back to object*/

var para1 = document.createElement("p");
var node1 = document.createTextNode(objCart.number);
para1.appendChild(node1);
var element1 = document.getElementById("s");
element1.appendChild(para1);

var firstpara1 = document.createElement("p");
var firstnode1 = document.createTextNode(objCart.item);
firstpara1.appendChild(firstnode1);
var firstelement1 = document.getElementById("item");
firstelement1.appendChild(firstpara1);

var secondpara1 = document.createElement("p");
var secondnode1 = document.createTextNode(objCart.price);
secondpara1.appendChild(secondnode1);
var secondelement1 = document.getElementById("price");
secondelement1.appendChild(secondpara1);

var thirdpara1 = document.createElement("p");
var thirdnode1 = document.createTextNode(objCart.Quantity);
thirdpara1.appendChild(thirdnode1);
// thirdpara1.innerHTML= objCart.Quantity
var thirdelement1 = document.getElementById("quantity");
thirdelement1.appendChild(thirdpara1);

if (button[0].style.backgroundColor='#FF7A00') {
  button[0].style.backgroundColor='#FFCD9E';
button[0].innerHTML= 'Remove from cart';
} else {
  button[0].style.backgroundColor='#FF7A00';
  button[0].innerHTML='Add to cart';
}
}

function addsecondcart(params) {
  // second add cart button
let secondstringCart= JSON.stringify(secondCart) /*convert fifthCart object to string*/
sessionStorage.setItem('seconditem', secondstringCart) /*store "string" to sessionstorage*/
let secondobjCart= JSON.parse(sessionStorage.getItem('seconditem')) /*convert string back to object*/
console.log(secondobjCart.number)

var para2 = document.createElement("p");
var node2 = document.createTextNode(secondobjCart.number);
para2.appendChild(node2);
var element2 = document.getElementById("s");
element2.appendChild(para2);

var firstpara2 = document.createElement("p");
var firstnode2 = document.createTextNode(secondobjCart.item);
firstpara2.appendChild(firstnode2);
var firstelement2 = document.getElementById("item");
firstelement2.appendChild(firstpara2);

var secondpara2 = document.createElement("p");
var secondnode2 = document.createTextNode(secondobjCart.price);
secondpara2.appendChild(secondnode2);
var secondelement2 = document.getElementById("price");
secondelement2.appendChild(secondpara2);

var thirdpara2 = document.createElement("p");
var thirdnode2 = document.createTextNode(secondobjCart.Quantity);
thirdpara2.appendChild(thirdnode2);
// thirdpara2.innerHTML= secondobjCart.Quantity
var thirdelement2 = document.getElementById("quantity");
thirdelement2.appendChild(thirdpara2);

button[1].style.backgroundColor='#FFCD9E';
button[1].innerHTML= 'Remove from cart';
}
function addthirdcart(params) {
  // third add cart button
let thirdstringCart= JSON.stringify(thirdCart) /*convert thirdCart object to string*/
sessionStorage.setItem('thirditem', thirdstringCart) /*store "string" to sessionstorage*/
let thirdobjCart= JSON.parse(sessionStorage.getItem('thirditem')) /*convert string back to object*/
console.log(thirdobjCart.number)

var para3 = document.createElement("p");
var node3 = document.createTextNode(thirdobjCart.number);
para3.appendChild(node3);
var element3 = document.getElementById("s");
element3.appendChild(para3);

var firstpara3 = document.createElement("p");
var firstnode3 = document.createTextNode(thirdobjCart.item);
firstpara3.appendChild(firstnode3);
var firstelement3 = document.getElementById("item");
firstelement3.appendChild(firstpara3);

var secondpara3 = document.createElement("p");
var secondnode3 = document.createTextNode(thirdobjCart.price);
secondpara3.appendChild(secondnode3);
var secondelement3 = document.getElementById("price");
secondelement3.appendChild(secondpara3);

var thirdpara3 = document.createElement("p");
var thirdnode3 = document.createTextNode(thirdobjCart.Quantity);
thirdpara3.appendChild(thirdnode3);
// thirdpara3.innerHTML= thirdobjCart.Quantity
var thirdelement3 = document.getElementById("quantity");
thirdelement3.appendChild(thirdpara3);


button[2].style.backgroundColor='#FFCD9E';
button[2].innerHTML= 'Remove from cart';
}
function addfourthcart(params) {
     // fourth add cart button
var fourthstringCart= JSON.stringify(fourthCart) /*convert fifthCart object to string*/
sessionStorage.setItem('fourthitem', fourthstringCart) /*store "string" to sessionstorage*/
var fourthobjCart= JSON.parse(sessionStorage.getItem('fourthitem')) /*convert string back to object*/
// console.log(fourthobjCart.number)

var para4 = document.createElement("p");
var node4 = document.createTextNode(fourthobjCart.number);
para4.appendChild(node4);
var element4 = document.getElementById("s");
element4.appendChild(para4);

var firstpara4 = document.createElement("p");
var firstnode4 = document.createTextNode(fourthobjCart.item);
firstpara4.appendChild(firstnode4);
var firstelement4 = document.getElementById("item");
firstelement4.appendChild(firstpara4);

var secondpara4 = document.createElement("p");
var secondnode4 = document.createTextNode(fourthobjCart.price);
secondpara4.appendChild(secondnode4);
var secondelement4 = document.getElementById("price");
secondelement4.appendChild(secondpara4);

var thirdpara4 = document.createElement("p");
var thirdnode4 = document.createTextNode(fourthobjCart.Quantity);
thirdpara4.appendChild(thirdnode4);
// thirdpara4.innerHTML = fourthobjCart.Quantity
var thirdelement4 = document.getElementById("quantity");
thirdelement4.appendChild(thirdpara4);

button[3].style.backgroundColor='#FFCD9E';
button[3].innerHTML= 'Remove from cart';
}

function addfifthcart(params) {
  // fifth add cart button
let fifthstringCart= JSON.stringify(fifthCart) /*convert fifthCart object to string*/
sessionStorage.setItem('fifthitem', fifthstringCart) /*store "string" to sessionstorage*/
let fifthobjCart= JSON.parse(sessionStorage.getItem('fifthitem')) /*convert string back to object*/
// console.log(fifthobjCart.number)

var para5 = document.createElement("p");
var node5 = document.createTextNode(fifthobjCart.number);
para5.appendChild(node5);
var element5 = document.getElementById("s");
element5.appendChild(para5);

var firstpara5 = document.createElement("p");
var firstnode5 = document.createTextNode(fifthobjCart.item);
firstpara5.appendChild(firstnode5);
var firstelement5 = document.getElementById("item");
firstelement5.appendChild(firstpara5);

var secondpara5 = document.createElement("p");
var secondnode5 = document.createTextNode(fifthobjCart.price);
secondpara5.appendChild(secondnode5);
var secondelement5 = document.getElementById("price");
secondelement5.appendChild(secondpara5);

var thirdpara5 = document.createElement("p");
var thirdnode5 = document.createTextNode(fifthobjCart.Quantity);
thirdpara5.appendChild(thirdnode5);

// thirdpara5.innerHTML= fifthobjCart.Quantity
var thirdelement5 = document.getElementById("quantity");
thirdelement5.appendChild(thirdpara5);

button[4].style.backgroundColor='#FFCD9E';
button[4].innerHTML= 'Remove from cart';
}

// console.log(thirdnode5);

function addsixthcart(params) {
  // sixth add cart button
let sixthstringCart= JSON.stringify(sixthCart) /*convert fifthCart object to string*/
sessionStorage.setItem('sixthitem', sixthstringCart) /*store "string" to sessionstorage*/
let sixthobjCart= JSON.parse(sessionStorage.getItem('sixthitem')) /*convert string back to object*/
console.log(sixthobjCart.number)

var para6 = document.createElement("p");
var node6 = document.createTextNode(sixthobjCart.number);
para6.appendChild(node6);
var element6 = document.getElementById("s");
element6.appendChild(para6);

var firstpara6 = document.createElement("p");
var firstnode6 = document.createTextNode(sixthobjCart.item);
firstpara6.appendChild(firstnode6);
var firstelement6 = document.getElementById("item");
firstelement6.appendChild(firstpara6);

var secondpara6 = document.createElement("p");
var secondnode6 = document.createTextNode(sixthobjCart.price);
secondpara6.appendChild(secondnode6);
var secondelement6 = document.getElementById("price");
secondelement6.appendChild(secondpara6);

var thirdpara6 = document.createElement("p");
var thirdnode6 = document.createTextNode(sixthobjCart.Quantity);
thirdpara6.appendChild(thirdnode6);
// thirdpara6.innerHTML = sixthobjCart.Quantity
var thirdelement6 = document.getElementById("quantity");
thirdelement6.appendChild(thirdpara6);

button[5].style.backgroundColor='#FFCD9E';
button[5].innerHTML= 'Remove from cart';
}

    
