let cartItemObjects;

onLoad();

function onLoad(){
    loadCartItemObjects();
    displayCartItems();
    displayCartPrice();
}

function displayCartPrice(){
    let price = document.querySelector('.price');
    let totalItem = cartItemObjects.length;
    let totalPrice = 0;
    let totalDiscount = 0;
    let totalAmount = 0;

    cartItemObjects.forEach(cartItem => {
        totalPrice += Number(cartItem.price.original_price);
        totalAmount += Number(cartItem.price.current_price);
        totalDiscount = totalPrice - totalAmount;
    })

    price.innerHTML = `
    <div class="price-head">
        PRICE DETAILS
    </div>
    <div class="price-main">
        <table>
            <tr>
                <td class="left">Price (${totalItem} items)</td>
                <td class="right">₹${totalPrice}</td>
            </tr>
            <tr>
                <td class="left">Discount</td>
                <td class="right"><span class="green">-₹${totalDiscount}</span></td>
            </tr>
            <tr>
                <td class="left">Delivery Charges</td>
                <td class="right"><span class="dc-cut">₹40</span> <span class="green">Free</span></td>
            </tr>
        </table>
    </div>
    <div class="price-total">
        <p>Total Amount</p>
        <p>₹${totalAmount}</p>
    </div>
    <div class="price-save green">
        <p>You will save ₹${totalDiscount} on this order</p>
    </div>
    `;
}

function loadCartItemObjects(){
    cartItemObjects = cartItems.map(itemId => {
        for (let i= 0; i < items.length; i++) {
            if (itemId == items[i].id) {
               return items[i];
            }
        }
    });
}

function displayCartItems(){
    let cart = document.querySelector('.cart'); 
    let innerHtml = '';
    if(cartItemObjects.length > 0){
        cartItemObjects.forEach(cartItems => {
            innerHtml += generateHtml(cartItems);
        });
        cart.innerHTML = innerHtml;
    } else {
        innerHtml = `
        <div class="cart-items">
            <div class="empty">
                <img src="./img/empty.webp" alt="">
                <p>Your cart is empty!</p>
                <a href="./index.html">Shop now</a>
            </div>
        </div>
        `;
        cart.innerHTML = innerHtml;
    }
}

function generateHtml(item){
        return `
    <div class="cart-items"> 
        <div class="cart-img">
            <img src="./img/${item.item_img}.webp" alt="">
        </div>
        <div class="cart-info">
            <p class="cart-company">${item.company}</p>
            <p class="cart-name">${item.name}</p>
            <table>
                <tr>
                    <td class="left">Price -</td>
                    <td class="right dc-cut">₹${item.price.original_price}</td>
                </tr>
                <tr>
                    <td class="left">Price after discount -</td>
                    <td class="right green cart-price">₹${item.price.current_price}</td>
                </tr>
            </table>
            <button class="remove-btn" onclick="removeItem(${item.id});"><i class="fa-solid fa-x"></i></button>
        </div>
    </div>
    `;
}

function removeItem(itemId) {
    cartItems = cartItems.filter(cartItemId => cartItemId != itemId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItemObjects();
    displayCartItems();
    displayCartPrice();
}

