document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const phoneNumberFiled =document.getElementById('phone-number');
    const phoneNumberString = phoneNumberFiled.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberFiled.value = newPhoneNumber;

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;


})

document.getElementById('btn-phone-minus').addEventListener('click',function(){

    const phoneNumberFiled =document.getElementById('phone-number');
    const phoneNumberString = phoneNumberFiled.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
k


    const newPhoneNumber = previousPhoneNumber - 1;
    phoneNumberFiled.value = newPhoneNumber;

    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-numbe');
    phoneTotalElement.innerText = phoneTotalPrice;



    


})