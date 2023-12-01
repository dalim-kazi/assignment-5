function getElementId(elementId) {
    const previousElement = document.getElementById(elementId);
    const previousElementString = previousElement.value;
    const newElemetValue = parseFloat(previousElementString);
    return newElemetValue;
}
// stap--2
function textInputValue(textValue) {
    const previousTextValue = document.getElementById(textValue);
    const previousTextValueString = previousTextValue.innerText;
    const newTextValue = parseFloat(previousTextValueString);
    return newTextValue;
}
 
// stap -3
document.getElementById('Calculate-btn').addEventListener('click', function () {
    const perPlayerAmount =getElementId ('per-player-field');
    const newExpensesTotalAmount = perPlayerAmount * 5;

    const previousExpensesTotalAmount = document.getElementById('expenses-total');
    previousExpensesTotalAmount.innerText=newExpensesTotalAmount
})
// stap-4
document.getElementById('Calculate-Total-btn').addEventListener('click', function () {
    const mangerInputField = getElementId('manager-field');
    
    const coachInputField = getElementId('Coach-field');
    
    const previousExpensesAmount = textInputValue('expenses-total');
    const totalAmount = mangerInputField + coachInputField + previousExpensesAmount;
      
    const previousTotalAmount = document.getElementById('total-amount');
    previousTotalAmount.innerText = totalAmount;
})