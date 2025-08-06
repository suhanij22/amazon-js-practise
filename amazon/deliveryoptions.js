export function getDeliveryOptions(deliveryOptionID) {
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionID) {
            deliveryOption = option;
        }
    });
    return deliveryOption;
}

export const deliveryOptions = [
{
    id:'1',
    deliveryDays:7,
    pricecents:0,
},
{
    id:'2',
    deliveryDays:3,
    pricecents:499,
},
{
    id:'3',
    deliveryDays:1,
    pricecents:999,
}
];
