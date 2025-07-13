const products=[{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image:'images/athletic-cotton-socks-6-pairs.jpg',
    name:'Black and Gray Athletic Cotton Socks -6 Pairs',
    rating:{
        stars:4.0,
        count:45
    },
    pricecent:1090
},{
     id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image:'images/intermediate-composite-Basketball.jpg',
    name:'Intermediate-Composite-Basketball',
    rating:{
        stars:3.5,
        count:100
    },
    pricecent:2095
},{
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image:'images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name:'adults-plain-cotton-tshirt-2-pack-teal',
    rating:{
        stars:4.5,
        count:87
    },
    pricecent:799
}];

let productHTML=``;

products.forEach((product)=>
{
    productHTML+=`<div class="item"><img src="${product.image}" height="190px">
    <div class="text">${product.name}</div>
    <div class="rating"><img src="images/rating-${product.rating.stars*10}.png" height="23px"><span class="comment">${product.rating.count}</span><div class="price">$${(product.pricecent/100).toFixed(2)}</div><div class="quantity">
      <select name="select quantity" class="quantity1">
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
    <div class="choose"><button class="add" data-product-id="${product.id}">Add to Cart</button></div>
    </div>
    </div>`;

});
document.querySelector('.gridjs').innerHTML=productHTML;
document.title='amazon';

document.querySelectorAll('.add').forEach((button)=>{
    button.addEventListener('click',()=>{
        const productId = button.dataset.productId;

    let matchingitem;
    cart.forEach((item)=>{
        if(item.productId===productId)
        {
            matchingitem=item;
        }
    });
    if(matchingitem){
        matchingitem.quantity+=1;
    }
    else{
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
     console.log(cart);
});
});