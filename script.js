if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeItems = document.getElementsByClassName('remove')
    for (let i = 0; i < removeItems.length; i++) {
    const element = removeItems[i];
    element.addEventListener('click',function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
        })
    }
}

function showCheckOut() {
    var cart = document.getElementById('cart')
    if (cart.style.display == 'none') {
        cart.style.display = 'flex'
    } else {
        cart.style.display = 'none'
    }
}

var removeItems = document.getElementsByClassName('remove')
for (let i = 0; i < removeItems.length; i++) {
    const element = removeItems[i];
    element.addEventListener('click', removeElement
    )
}


function removeElement(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
}

// var removeItems = document.getElementsByClassName('remove')
// for (let i = 0; i < removeItems.length; i++) {
//     const reelement = removeItems[i];
//     reelement.addEventListener('click', uncartCounter
//     )
// }

// var uncounter = 0
// function uncartCounter() {
//     if (document.getElementById('cartcounter').innerText == 0) {
//         document.getElementById('cartcounter').innerText= counter--
//     } else {
//         document.getElementById('cartcounter').innerText= counter--
//     }
// }


var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (let i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged)
}

function quantityChanged(event) {
    var input= event.target
    if (isNaN(input.value) || input.value<= 0) {
        input.value = 1
        alert('Cannot Purchase less than an item')
    }
    updateCartTotal()
}

var addToCartButton = document.getElementsByClassName('click')
for (let i = 0; i < addToCartButton.length; i++) {
    const button = addToCartButton[i];
    button.addEventListener('click', addToCartClicked)
    
}

var addToCartButton = document.getElementsByClassName('click')
for (let i = 0; i < addToCartButton.length; i++) {
    const button = addToCartButton[i];
    button.addEventListener('click', cartCounter)
}

var counter = 0
function cartCounter() {
    if (document.getElementById('cartcounter').innerText == 0) {
        document.getElementById('cartcounter').innerText= counter++
    } else {
        document.getElementById('cartcounter').innerText= counter++
    }
}

var addToCartButton = document.getElementsByClassName('click')
for (let i = 0; i < addToCartButton.length; i++) {
    const button = addToCartButton[i];
    button.addEventListener('click', changeButtonColor)
}

function changeButtonColor() {
    const addToCartButton = document.getElementsByClassName("click")[0]
    if (addToCartButton.classList.contains("click")){
        addToCartButton.classList.replace("click", "clicked")
        addToCartButton.innerHTML= 'Added to Cart'
    } else {
        addToCartButton.classList.add("click")
    }
}

// var addToCartButton = document.getElementsByClassName('click')
// for (let i = 0; i < addToCartButton.length; i++) {
//     const button = addToCartButton[i];
//     button.addEventListener('click', buttonColor)
// }

// function buttonColor(e){
//     var buttonHTML = e.target.innerHTML
//     if (buttonHTML=='Add to cart') {
//         buttonHTML = 'Added to cart'
//     } else {
//         buttonHTML='Add to cart'
//         console.log(buttonHTML)
//     }  
// }

function addToCartClicked(event) {
    var button = event.target
    var shopItem=button.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var picture = shopItem.getElementsByClassName('class-image')[0].src
    var price = shopItem.getElementsByClassName('price')[0]
    var cost = price.getElementsByClassName('cost')[0].innerText
    addItemToCart(title,cost,picture)
    updateCartTotal()
}

function  addItemToCart(title,cost,picture) {
    var cartRows = document.createElement('div')
    cartRows.classList.add('cart-rows') 
    var cartItem = document.getElementsByClassName('cart-items')[0]
    var cartItemName = document.getElementsByClassName('cart-item-title')
    for (let i = 0; i < cartItemName.length; i++) {
        if (cartItemName[i].innerText == title) {
            alert('This item is already added to cart')
            return
        }
    }
    cartRows.innerHTML = `
                        <div style="width: 40%;">
                            <img src=${picture} style="width: 80px; height: 100px">
                        </div>
                        <div style="diplay:flex; flex-direction: column; height: 100%;
                        justify-content: space-around;">
                            <div class="class-item cart-column" style="width: 80%;">
                                <p class="cart-item-title">
                                    ${title}
                                </p>
                                <p class="cart-price cart-column" style"width: 50%;">$${cost},000</p>
                            </div>
                            <div class="cart-quantity cart-column">
                            <input type="number" class="cart-quantity-input" value="1">
                            <button class="remove">
                                REMOVE
                            </button>
                            </div>
                        </div>
                        `
    cartItem.append(cartRows)
    cartRows.getElementsByClassName('remove')[0].addEventListener('click', removeElement
    )
    cartRows.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', 
    quantityChanged)
}


function updateCartTotal() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItems.getElementsByClassName('cart-rows')
    var total = 0
    for (let i = 0; i < cartRows.length; i++) {
        var cartItem = cartRows[i];
        var priceElement = cartItem.getElementsByClassName('cart-price')[0]
        var quantityElement = cartItem.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (quantity * price)
    }
    document.getElementById('total').innerText = ` $${total},000`
}

function nameValidation() {
    var nameInput = document.getElementById('name')
    var nameError = document.getElementById('errorName')
    if (nameInput.value == "") {
        nameInput.style.borderColor = 'red'
        nameError.innerHTML = 'Invalid Username'
    } else {
        firstForm.style.borderColor = 'green'
    }
}

function emailValidation() {
    var emailInput = document.getElementById('email')
    var emailError = document.getElementById('errorMail')

    if (emailInput.value == "") {
        emailInput.style.borderColor = 'red'
        emailError.innerHTML="Please enter a valid email"
    } 
    else if (!emailInput.value.includes('@')) {
        emailInput.style.borderColor = 'red'
        emailError.innerHTML="Invalid Email"
    } else {
        emailInput.style.borderColor = 'green'
        emailError.innerHTML=""
    } 
}

function numberValidation() {
    var numberInput = document.getElementById('phonenumber')
    var numberError = document.getElementById('errorNumber')
    if (numberInput.value.length < 11) {
        numberInput.style.borderColor = 'red'
        numberError.innerHTML='Phone number cannot be less than eleven digits'
    } else {
        numberInput.style.borderColor = 'green'
        numberError.innerHTML=''
    }
}

function closeCheckOut() {
    var closeCart = document.getElementById('cart')
    if (closeCart.style.display=='flex') {
        closeCart.style.display='none'
    } else {
        closeCart.style.display=='flex'
    }
}


