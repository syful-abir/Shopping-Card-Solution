//  funtion likhe kora.

function updatePhoneNumber(isIncrease){
    const phoneNumberFiled =document.getElementById('phone-number');
    const phoneNumberString = phoneNumberFiled.value;
    const previousPhoneNumber = parseInt(phoneNumberString);


    let newPhoneNumber;

    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberFiled.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;

    const phoneTotalElement =document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;

}
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currenPhoneTotal = parseInt(currentPhoneTotalString);
    return currenPhoneTotal;
}



function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
     subTotalElement.innerText = value;

}
function calculateSubTotal(){
    const currenPhoneTotal = getTextElementValueById('phone-total');
     const currenCaseTotal = getTextElementValueById('Case-Total');
     const currentSubTotal = currenPhoneTotal + currenCaseTotal;
     setTextElementValueById('sub-total', currentSubTotal)

// calculate tax

     const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
     const taxAmount = parseFloat(taxAmountString); 
     
// calculate final amount

     setTextElementValueById('tax-amount' , taxAmount)
     const finalAmount = currentSubTotal + taxAmount;
     setTextElementValueById('final-total' , finalAmount); 
     



}

document.getElementById('btn-phone-plus').addEventListener('click',function(){

     const newPhoneNumber = updatePhoneNumber(true);
     updatePhoneTotalPrice(newPhoneNumber);

     calculateSubTotal();
     

    
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){

    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
})