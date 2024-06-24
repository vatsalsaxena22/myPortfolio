function displayItems(){
    let shoppingContainer = document.querySelector('.shopping-container');

    let innerHtml = '';

    items.forEach(item => {
        innerHtml += `
        <div class="shopping-items">
            <img class="item-img" src="./img/${item.item_img}.webp" alt="items">
            <p class="company">${item.company}</p>
            <p class="name">${item.name}</p>
            <div>
                <span class="stars">${item.review.stars} &star;</span>
                <span class="rating">(${item.review.rating})</span>
            </div>
            <div>
                <span class="current-price">₹${item.price.current_price}</span>
                <span class="original-price">₹${item.price.original_price}</span>
                <span class="discount">${item.price.discount}% off</span>
            </div>
            <button class="btn-add" onclick="addToCart(${item.id});">ADD TO CART</button>
        </div>`
    });
    shoppingContainer.innerHTML = innerHtml;
}

function addToCart(itemId){
    cartItems.push(itemId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    cartBtn();
}

function cartBtn(){
    let cartCounts = document.querySelector('.cart-counts');
    if (cartItems.length === 0) {
        cartCounts.style.visibility = 'hidden';
    } else {
        cartCounts.style.visibility = 'visible';
        cartCounts.innerHTML = cartItems.length;
    }
}

let cartItems;

function onLoad(){
    let cartItemsStr = JSON.parse(localStorage.getItem('cartItems'));
    cartItems = cartItemsStr || [];
    displayItems();
    cartBtn();
}
onLoad();