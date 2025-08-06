import {cart, updatedeliveryOption} from './cart.js'; // Importing the cart array from cart.js
import {products,getProduct} from './products.js'; // Importing the products array from products.js
import {formatCurrency} from './utils/money.js'; // Importing the money formatting utility
import { removeFromCart } from './cart.js';
import { calculateCartQuantity } from './cart.js'; // Importing the cart quantity calculation function
import {deliveryOptions,getDeliveryOptions} from './deliveryoptions.js'; // Importing delivery options
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'; // Importing dayjs for date formatting


export function renderCartSummary() {

let cartSummaryHTML='';


cart.forEach((item) => {
    const deliveryOptionID=item.deliveryOptionID;
    const productId= item.productId;
    const matchingproduct= getProduct(productId);

    const deliveryOption= getDeliveryOptions(deliveryOptionID);
    const today= dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'day');
    const formattedDate = deliveryDate.format('dddd, MMMM D');

    cartSummaryHTML += `<div class="t1 t delete-${matchingproduct.id}">
            <p class="head1">Delivery date: ${formattedDate}</p>
            <div class="item">
           <div class="image"> <img src="${matchingproduct.image}" height="110px"></div> 
           <div><b>${matchingproduct.name}</b>
            <p style="color: darkred; font-weight: bold;">$${formatCurrency(matchingproduct.pricecent)}</p>
            <p>Quantity :${item.quantity} <span style="color: blue;"><span class="update">Update</span> <span class="delete delete-${matchingproduct.id}" data-product-id="${matchingproduct.id}">Delete</span></span></p>
           </div>
           <div class="option"><span style="color: black; font-weight: bold;">Choose a delivery option:</span>
            <br><br>
            ${getDeliveryOptionPrice(matchingproduct,item)}
           </div>
            </div>
        </div>`;
});

function getDeliveryOptionPrice(matchingproduct,item) {
    let html='';
    deliveryOptions.forEach((deliveryOption)=>{
    const today= dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'day');
    const formattedDate = deliveryDate.format('dddd, MMMM D');
    const price= deliveryOption.pricecents===0?
    'FREE':`$${(deliveryOption.pricecents / 100).toFixed(2)}-`;

        const ischecked= deliveryOption.id=== item.deliveryOptionID;
    console.log(ischecked);
     html += `<label><input type="radio" 
     value="${deliveryOption.id}"
     ${ischecked? 'checked' : ''}
     class="option option-js" 
            data-product-id="${matchingproduct.id}" 
             data-delivery-option-id="${deliveryOption.id}"
     name="delivery-${matchingproduct.id}">${formattedDate}
            <p class="para">${price} Shipping</p></label>`;

    });
    return html;
}

document.querySelector('.cart-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.delete').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);
        const container = document.querySelector(`.delete-${productId}`);
        container.remove();
        updatecount();
});
});
function updatecount() {
    const cartquantity = calculateCartQuantity();
    document.querySelector('.item-count').innerHTML = `${cartquantity}`;
}
updatecount();

document.querySelectorAll('.option-js').forEach((element)=>{
    element.addEventListener('click',()=>{
        const productId = element.dataset.productId;
const deliveryOptionID = element.dataset.deliveryOptionId;
        updatedeliveryOption(productId, deliveryOptionID);
        renderCartSummary();
    });
});

}
renderCartSummary();