document.getElementById('btn-case-plus').addEventListener('click',function(){
    const caseNumberFiled =document.getElementById('case-number');
    const caseNumberString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber + 1;
    caseNumberFiled.value = newCaseNumber;

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('Case-Total');
    caseTotalElement.innerText = caseTotalPrice;

    // calculate total

    const caseTotalvalue = document.getElementById('Case-Total');
    const currentCaseTotalString = caseTotalvalue.innerText;
    const currenCaseTotal =parseInt(currentCaseTotalString);

    const phoneTotalvalue = document.getElementById('phone-Total');
    const currentphoneTotalString = phoneTotalvalue.innerText;
    const currenphoneTotal = parseInt(currentCaseTotalString);

    const currentSubTotal = currenCaseTotal + currenphoneTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;


})

document.getElementById('btn-case-minus').addEventListener('click',function(){

    const caseNumberFiled =document.getElementById('case-number');
    const caseNumberString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber - 1;
    caseNumberFiled.value = newCaseNumber;

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('Case-Total');
    caseTotalElement.innerText = caseTotalPrice;


    


})