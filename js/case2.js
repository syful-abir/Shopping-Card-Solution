//  funtion likhe kora.

function updateCaseNumber(isIncrease){
    const caseNumberFiled =document.getElementById('case-number');
    const caseNumberString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseNumberString);


    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberFiled.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;

    const caseTotalElement =document.getElementById('Case-Total');
    caseTotalElement.innerText = caseTotalPrice;

}

function calculateSubTotal(){
    const currenPhoneTotal = getTextElementValueById('phone-total');
     const currenCaseTotal = getTextElementValueById('Case-Total');
     const currentSubTotal = currenPhoneTotal + currenCaseTotal;

     const subTotalElement = document.getElementById('sub-total');
     subTotalElement.innerText = currentSubTotal;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){

     const newCaseNumber = updateCaseNumber(true);
     updateCaseTotalPrice(newCaseNumber);

     calculateSubTotal();
    
})

document.getElementById('btn-case-minus').addEventListener('click',function(){

    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal()

})