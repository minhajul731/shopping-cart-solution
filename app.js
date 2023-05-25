// case button handel
function updateProductQuantity(product, price, isIncrease) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    totalPrice();
}

function getInputValue(product) {
    const productNumber = document.getElementById(product + '-number');
    const productQuantity = parseInt(productNumber.value);
    return productQuantity;
}

function totalPrice() {
    const phoneTotla = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotla + caseTotal;
    const taxAmmount = subTotal / 10;
    const totalPrice = subTotal + taxAmmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = taxAmmount;
    document.getElementById('total-price').innerText = totalPrice;

}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductQuantity('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductQuantity('phone', 1219, false);
});

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductQuantity('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductQuantity('case', 59, false);
});