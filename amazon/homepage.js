import { cart,addToCart } from './cart.js'; // Importing the cart array from cart.js
import { products } from './products.js'; // Importing the products array from products.js         
import { formatCurrency } from './utils/money.js'; // Importing the money formatting utility
let productHTML=``;    

products.forEach((product)=>
{
    productHTML+=`<div class="item"><img src="${product.image}" height="190px">
    <div class="text">${product.name}</div>
    <div class="rating"><img src="images/rating-${product.rating.stars*10}.png" height="23px"><span class="comment">${product.rating.count}</span><div class="price">$${formatCurrency(product.pricecent)}</div><div class="quantity">
      <select name="select quantity" class="quantity1 quantity1-${product.id}">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      </select>
    </div>
    <div class="added added-${product.id}"><img src="images/checkmark.png" height="18px">  added</div>
    <div class="choose"><button class="add" data-product-id="${product.id}">Add to Cart</button></div>
    </div>
    </div>`;

});
document.querySelector('.gridjs').innerHTML=productHTML;
document.title='amazon';


function updateCartQuantity(){
    let cartquantity = 0;
     console.log(cart);
     cart.forEach((item)=>{
     cartquantity+=item.quantity;
});
console.log(cartquantity);
document.querySelector('.cart').innerText = cartquantity;
};

document.querySelectorAll('.add').forEach((button)=>{
    button.addEventListener('click',()=>{
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
const addbox=document.querySelector(`.added-${productId}`);
addbox.classList.add('added1');
let timeoutID;

timeoutID=setTimeout(()=>{
        addbox.classList.remove('added1');
    },2000);
if(timeoutID){  
    clearTimeout(timeoutID);
};
});
});