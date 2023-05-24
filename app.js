// case button handel
function updateCaseQuantity(isIncrease) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (isIncrease == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseQuantity(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseQuantity(false);
});