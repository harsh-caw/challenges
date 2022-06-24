if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var quantityEL = document.getElementsByClassName('quantity');
    var decreaseCartItemButtons = document.getElementsByClassName('decrease');
    var increaseCartItemButtons = document.getElementsByClassName('increase');
    for (var i = 0; i < quantityEL.length; i++) {
        var input = quantityEL[i];
        increaseCartItemButtons[i].addEventListener('click', increaseCartItem);
        decreaseCartItemButtons[i].addEventListener('click', decreaseCartItem);
    }

    var addToCartButtons = document.getElementsByClassName('add');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
}

function increaseCartItem(event) {
    let buttonClicked = event.target;
    let buttonEL =
        buttonClicked.parentElement.parentElement.getElementsByClassName(
            'quantity',
        );
    buttonEL[0].innerText = parseInt(buttonEL[0].innerText) + 1;
    updateCartTotal();
}
function decreaseCartItem(event) {
    let buttonClicked = event.target;
    let buttonEL =
        buttonClicked.parentElement.parentElement.getElementsByClassName(
            'quantity',
        );
    buttonEL[0].innerText = parseInt(buttonEL[0].innerText) - 1;
    if (buttonEL[0].innerText == 0) {
        var id = event.path[1].name;
        console.log(event);
        buttonClicked.parentElement.parentElement.parentElement.remove();

        let buttonToBeReplaced = document.getElementById(id).parentElement;
        // buttonToBeReplaced.remove();
        let addToCartButtonContents = `<button id="${id}" class="add">Add to Cart</button>`;
        let addToCartButton = document.createElement('add');
        addToCartButton.innerHTML = addToCartButtonContents;
        buttonToBeReplaced.parentNode.replaceChild(
            addToCartButton,
            buttonToBeReplaced,
        );
        console.log(buttonToBeReplaced);
        // buttonToBeReplaced.addEventListener('click', addToCartClicked)
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    let button = event.target;
    let menuItem = button.parentElement.parentElement;
    let title = menuItem.getElementsByClassName('menu-item')[0].innerHTML;
    let price = menuItem.getElementsByClassName('price')[0].innerHTML;
    let imageSrc = menuItem.querySelectorAll('.plate img')[0].src;
    let id = event.path[0].id;
    addItemToCart(title, price, imageSrc, id);

    let inCartButtonContents = `
             <button id=${id} class="in-cart">
                    <img src="images/check.svg" alt="Check" />
                    In Cart
            </button>`;
    let inCartButton = document.createElement('in-cart');
    inCartButton.innerHTML = inCartButtonContents;
    button.parentNode.replaceChild(inCartButton, button);

    updateCartTotal();
}

function addItemToCart(title, price, imageSrc, id) {
    var cartRow = document.createElement('li');
    cartRow.classList.add('cart-rows');
    // cartRow.setAttribute('name', id);
    var cartSummary = document.getElementsByClassName('cart-summary')[0];
    var cartItemNames = cartSummary.getElementsByClassName('menu-item');

    var cartRowContents = `
               <div class="plate">
                        <img src="${imageSrc}" alt="Fish Sticks and Fries" class="plate" />
                </div>
                <div class="content">
                        <p class="menu-item">${title}</p>
                        <p class="price">${price}</p>
                </div>
                <div class="quantity__wrapper">
                        <button name=${id} class="decrease">
                        <img src="images/chevron.svg" />
                        </button>
                        <div class="quantity">1</div>
                        <button class="increase">
                        <img src="images/chevron.svg" />
                        </button>
                </div>
                <div class="subtotal">
                        ${price}
                </div>`;
    cartRow.innerHTML = cartRowContents;
    cartSummary.append(cartRow);
    cartRow
        .getElementsByClassName('increase')[0]
        .addEventListener('click', increaseCartItem);
    cartRow
        .getElementsByClassName('decrease')[0]
        .addEventListener('click', decreaseCartItem);
}

function updateCartTotal() {
    let cartRows = document.getElementsByClassName('cart-rows');
    if (cartRows.length == 0)
        document.getElementsByClassName('empty')[0].style.display = 'visible';
    else document.getElementsByClassName('empty')[0].style.display = 'none';
    let subtotal = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let quantity = cartRow.getElementsByClassName('quantity')[0].innerHTML;
        let priceEL = cartRow.getElementsByClassName('price')[0];
        let price = parseFloat(priceEL.innerText.replace('$', ''));
        subtotal += price * quantity;
        let itemSubtotalELement = cartRow.getElementsByClassName('subtotal')[0];
        itemSubtotalELement.innerHTML = '$' + subtotal.toFixed(2);
    }
    subtotal = subtotal.toFixed(2);
    document.getElementsByClassName('amount price subtotal')[0].innerHTML =
        '$' + subtotal;
    let tax = (0.0975 * subtotal).toFixed(2);
    document.getElementsByClassName('amount price tax')[0].innerHTML =
        '$' + tax;
    let total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
    document.getElementsByClassName('amount price total')[0].innerHTML =
        '$' + total;
}
