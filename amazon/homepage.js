const products=[{
    image:'athletic-cotton-socks-6-pairs.jpg',
    name:'Black and Gray Athletic Cotton Socks -6 Pairs',
    rating:{
        stars:4.0,
        count:45
    },
    pricecent:1090
},{
    image:'intermediate-composite-Basketball.jpg',
    name:'Intermediate-Composite-Basketball',
    rating:{
        stars:3.5,
        count:100
    },
    pricecent:2095
},{
    image:'adults-plain-cotton-tshirt-2-pack-teal.jpg',
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
    <div class="rating"><img src="rating-${product.rating.stars*10}.png" height="23px"><span class="comment">${product.rating.count}</span><div class="price">$${(product.pricecent/100).toFixed(2)}</div><div class="quantity">
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
    <div class="choose"><button class="add">Add to Cart</button></div>
    </div>
    </div>`;

});
document.querySelector('.gridjs').innerHTML=productHTML;

console.log(productHTML);
document.title='amazon';