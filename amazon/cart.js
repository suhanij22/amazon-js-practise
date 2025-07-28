export let cart = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1},
        {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1
        }
];

export function addToCart(productId)
{
    let matchingitem;
    cart.forEach((item)=>{
        if(item.productId===productId)
        {
            matchingitem=item;
        }
    });
    const quantityselector = document.querySelector(`.quantity1-${productId}`);
    const quan1=Number(quantityselector.value);
    if(matchingitem){
        matchingitem.quantity+= quan1;
    }
    else{
        cart.push({
            productId: productId,
            quantity: quan1
        });
    }
};
export function removeFromCart(productId){ 
    const newCart=[];
    cart.forEach((item)=>{
        if(item.productId!==productId){
            newCart.push(item);
        }
    });
    cart = newCart;
}