const billInput = document.querySelector('#input-bill'); //do these need to be input-bill??
console.log(billInput);
const tipInput = document.querySelector('#input-tip');
console.log(tipInput);
const peopleInput = document.querySelector('#input-people');
console.log(peopleInput);
const displayTip = document.querySelector('#display-tip');
console.log(displayTip);
const displayTotal = document.querySelector('#display-total');
console.log(displayTotal);


billInput.addEventListener('input', handleBill);
tipInput.addEventListener('input', handleBill);
peopleInput.addEventListener('input', handleBill);

function handleBill(e) {
    let bill = parseInt(billInput.value);
    console.log(bill);
    let percent = parseInt(tipInput.value);
    console.log(percent);
    let party = parseInt(peopleInput.value);
    console.log(party);
    let tip = bill * percent / 100
    console.log(tip)
    let total = bill + tip
    console.log(total)
    let perPerson = total / party
    console.log(perPerson)
};
