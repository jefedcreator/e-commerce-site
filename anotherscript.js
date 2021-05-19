if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeItems = document.getElementsByClassName('remove')
    for (let i = 0; i < removeItems.length; i++) {
        const element = removeItems[i];
        element.addEventListener('click', function (event) {
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
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (let i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged)
}


var addToCartButton = document.getElementsByClassName('click')
for (let i = 0; i < addToCartButton.length; i++) {
    const button = addToCartButton[i];
    button.addEventListener('click', addToCartClicked)
}



function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var picture = shopItem.getElementsByClassName('class-image')[0].src
    var price = shopItem.getElementsByClassName('price')[0]
    var cost = price.getElementsByClassName('cost')[0].innerText
    addItemToCart(title, cost, picture)
    updateCartTotal()
}

function addItemToCart(title, cost, picture) {
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
                        <div class="class-item cart-column" style="width: 80%;">
                            <p class="cart-item-title">
                                ${title}
                            </p>
                        </div>
                        <p class="cart-price cart-column" style"width: 50%;">$${cost},000</p>
                        <div class="cart-quantity cart-column">
                        <img src="./Project Files/Images/minus-solid.svg" alt="" class="second-cart-quantity-input" style="width:10%">
                        <p class="cart-counter">1</p>
                        <img src="./Project Files/Images/plus-solid.svg" alt="" class="cart-quantity-input" style="width:10%">
                        <button class="remove">
                            REMOVE
                        </button>
                       </div>
    `
    cartItem.append(cartRows)
    cartRows.getElementsByClassName('remove')[0].addEventListener('click', removeElement
    )
    cartRows.getElementsByClassName('cart-quantity-input')[0].addEventListener('click',
    increamentCounter)
    cartRows.getElementsByClassName('second-cart-quantity-input')[0].addEventListener('click',
    decreamentCounter)
}


var inputQuantity = document.getElementsByClassName('cart-quantity-input')
for (let i = 0; i < inputQuantity.length; i++) {
        var increament = inputQuantity[i];
        increament.addEventListener('click', increamentCounter)
        console.log(increament)
}

function increamentCounter(event) {
    var i = 1
    var counter = event.target;
    counter.getElementsByClassName('cart-counter').innerHTML = i++;
    console.log(counter.getElementsByClassName('cart-counter').innerHTML)
    updateCartTotal()
}


    var inputQuantityDecrease = document.getElementsByClassName('second-cart-quantity-input')
    for (let i = 0; i < inputQuantityDecrease.length; i++) {
        var decreament = inputQuantityDecrease[i];
        console.log(decreament)
        decreament.addEventListener('click', decreamentCounter)   
    }

    var j = 0;
    function decreamentCounter() {
    if (document.getElementsByClassName('cart-counter')[0].innerHTML <= 0) {
        document.getElementsByClassName('cart-counter')[0].innerHTML = 1
        alert('cannot purchase less than 1 item')

    } else {
        document.getElementsByClassName('cart-counter')[0].innerHTML = --j

    }
    updateCartTotal()
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
        var quantity = quantityElement.innerHTML
        total = total + (quantity * price)
    }
    document.getElementById('total').innerText = `$${total},000`
}



console.log()
