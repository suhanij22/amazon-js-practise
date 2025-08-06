import { cart } from "./cart.js";
import { getProduct } from "./products.js";
import { deliveryOptions,getDeliveryOptions } from "./deliveryoptions.js"; // Importing delivery options

export function renderpayment(){
    let productpricecent=0;
    let shippingcharge=0;
    let beforetax=0;
    let tax=0;
    let paymentHTML='';
    let total=0;
    cart.forEach((item) => {
        const product= getProduct(item.productId);
        productpricecent+= product.pricecent * item.quantity;
        
        const deliveryOption = getDeliveryOptions(item.deliveryOptionID);
        shippingcharge += deliveryOption.pricecents;
        beforetax= productpricecent + shippingcharge; 
        tax = (beforetax * 10)/100; // Assuming a 10% tax rate
        total= beforetax + tax;
    });
console.log(productpricecent);
console.log(shippingcharge);
console.log(beforetax);
console.log(tax);
console.log(total);
    paymentHTML= `<div class="t2">
            <p class="head1" style="color: black;">Order Summary:</p>
        <div class="summaryrow">
            <div>items <span>(3 items):</span></div><div class="price"><span>$${(productpricecent / 100).toFixed(2)}</span></div>
            </div>
             <div class="summaryrow">
            <div>shipping & handling:</div><div class="price"><span>$${(shippingcharge / 100).toFixed(2)}</span><hr></div>
            </div>
            <div class="summaryrow">
            <div>total before tax:</div><div class="price"><span>$${(beforetax / 100).toFixed(2)}</span></div>
            </div>
            <div class="summaryrow">
            <div>estimated tax(10%):</div><div class="price"><span>$${(tax / 100).toFixed(2)}</span></div>
            </div>
           <div style="margin: 10px; margin-top: 20px;"><hr></div>
          <div class="summaryrow ordertotal">
        <div class="ordertotal">Order Total:</div><div class="price"><span>$${(total / 100).toFixed(2)}</span></div>
            </div>
            <div class="placebutton"><button class="placeorder">Place Order</button></div>
        </div>`;
    
    document.querySelector('.paymentcart').innerHTML= paymentHTML;
};
