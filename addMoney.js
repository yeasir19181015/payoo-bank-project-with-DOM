document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseFloat(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
if(amount && pin){
    if(convertedPin === 1234){
        const sum = convertedAmount + convertedMainBalance;
        document.getElementById('main-balance').innerText = sum;
    }
    else{
        alert("enter valid pin")
    }
}
else{
    alert("enter amount and correct pin")
}

})