// case button handel
function updateCaseQuantity(product, price, isIncrease) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncrease == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseQuantity('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseQuantity('phone', 1219, false);
});

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseQuantity('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseQuantity('case', 59, false);
});