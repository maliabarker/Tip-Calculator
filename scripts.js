// create variables for HTML elements
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
const displayPerPerson = document.querySelector('#display-per-person');

// add event listeners for each input element
billInput.addEventListener('input', handleBill);
tipInput.addEventListener('input', handleBill);
peopleInput.addEventListener('input', handleBill);

// function to get value of each input and calculate tip, total, and cost per person
function handleBill(e) {
    let bill = parseInt(billInput.value);
    console.log(bill);
    let percent = parseInt(tipInput.value);
    console.log(percent);
    let party = parseInt(peopleInput.value);
    console.log(party);
    let tip = bill * percent / 100;
    console.log(tip.toFixed(2));
    let total = bill + tip;
    console.log(total.toFixed(2));
    let perPerson = total / party;
    console.log(perPerson.toFixed(2));

    displayTip.innerHTML = `Tip: $${tip.toFixed(2)}`;
    displayTotal.innerHTML = `Total: $${total.toFixed(2)}`;
    displayPerPerson.innerHTML = `Cost per Person: $${perPerson.toFixed(2)}`;
};

