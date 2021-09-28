const decreaseNumber = (itemId,itemPrice,price) => {
    let itemVal = document.getElementById(itemId);
    let itemPri = document.getElementById(itemPrice);
    
    let cartProduct = document.getElementById("product_total_amt");
    let shipCharge = document.getElementById("shipping_charge");
    let Total = document.getElementById("total_cart_amt");

    if(itemVal.value <= 0){
        itemVal.value = 0;
        itemPri.innerText = 0;
    }
    else{
        itemVal.value = parseInt(itemVal.value) - 1;

        itemPri.innerText = parseInt(itemPri.innerText) - parseInt(price);
        
        cartProduct.innerText = parseInt(cartProduct.innerText) - parseInt(price);
        Total.innerText = parseInt(cartProduct.innerText) + parseInt(shipCharge.innerText);

    }
}
const increaseNumber = (itemId,itemPrice,price) => {
    let itemVal = document.getElementById(itemId);
    let itemPri = document.getElementById(itemPrice);
    let cartProduct = document.getElementById("product_total_amt");
    let shipCharge = document.getElementById("shipping_charge");
    let Total = document.getElementById("total_cart_amt");

    if(itemVal.value >= 100){
        itemVal.value = 100;
    }
    else{
        console.log(price);
        itemVal.value = parseInt(itemVal.value) + 1;
        itemPri.innerText = parseInt(price) + parseInt(itemPri.innerText);
        
        if(itemVal.value == 2){
            cartProduct.innerText = parseInt(price)*2 + parseInt(cartProduct.innerText);
        }
        else{
            cartProduct.innerText = parseInt(price) + parseInt(cartProduct.innerText);
        }
        Total.innerText = parseInt(cartProduct.innerText) + parseInt(shipCharge.innerText);
        
    }
}