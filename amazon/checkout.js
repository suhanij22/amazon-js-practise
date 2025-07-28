import {cart} from './cart.js'; // Importing the cart array from cart.js
import {products} from './products.js'; // Importing the products array from products.js
import {formatCurrency} from './utils/money.js'; // Importing the money formatting utility
import { removeFromCart } from './cart.js';
let cartSummaryHTML='';

cart.forEach((item) => {
    const productId= item.productId;
    let matchingproduct;
    products.forEach((product) => {
        if(product.id === productId) {
            matchingproduct = product;
        }
    });
    console.log(matchingproduct);
    cartSummaryHTML += `<div class="t1 t delete-${matchingproduct.id}">
            <p class="head1">Delivery date: Tuesday, June 21</p>
            <div class="item">
           <div class="image"> <img src="${matchingproduct.image}" height="110px"></div> 
           <div><b>${matchingproduct.name}</b>
            <p style="color: darkred; font-weight: bold;">$${formatCurrency(matchingproduct.pricecent)}</p>
            <p>Quantity :${item.quantity} <span style="color: blue;"><span class="update">Update</span> <span class="delete delete-${matchingproduct.id}" data-product-id="${matchingproduct.id}">Delete</span></span></p>
           </div>
           <div class="option"><span style="color: black; font-weight: bold;">Choose a delivery option:</span>
            <br><br>
            <input type="radio" class="option" name="delivery-${matchingproduct.id}" value="Tuesday, June 21">Tuesday, June 21
            <p class="para">FREE Shipping</p>
            <input type="radio" class="option" name="delivery-${matchingproduct.id}" value="Wednesday, June 15">Wednesday, June 15
            <p class="para">$4.99 -Shipping</p>
            <input type="radio" class="option" name="delivery-${matchingproduct.id}" value="Monday, June 13">Monday, June 13
            <p class="para">$9.99 -Shipping</p>
           </div>
            </div>
        </div>`;
});

document.querySelector('.cart-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.delete').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);
        const container = document.querySelector(`.delete-${productId}`);
        console.log(container);
        container.remove();
});
});