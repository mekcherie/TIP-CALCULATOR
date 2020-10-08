const display = document.querySelector('.display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const totalInput = document.querySelector('.total')


var billAmount= 0
var TipAmount= 0
var PeopleAmount=1


tipInput.addEventListener('change', handleTip)
billInput.addEventListener('change', handleBill)
peopleInput.addEventListener('change', handlePeople)

function handleBill(e) {
  billAmount = parseInt(e.target.value)
   console.log("billvalue", billAmount)
   display.innerHTML= (TipAmount / 100)
   totalInput.innerHTML= (PeopleAmount*(billAmount+TipAmount*billAmount))
}

function handleTip(e) {
  TipAmount = parseInt(e.target.value)
  console.log("tipvalue", TipAmount)
  display.innerHTML= (TipAmount / 100)
  totalInput.innerHTML= (PeopleAmount*(billAmount+TipAmount*billAmount))
}

function handlePeople(e) {
  peopleAmount = parseInt(e.target.value)
  console.log("peoplevalue", peopleAmount)
  display.innerHTML= (TipAmount / 100)
  totalInput.innerHTML= (PeopleAmount*(billAmount+TipAmount*billAmount))
}
