// const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')


const peopleInput = document.querySelector('#people')

const text = document.querySelector("#tip_per")
const text2= document.querySelector("#bill")
const text3 = document.querySelector("#bill")
const text4 = document.querySelector('#total')

function calculateTip() {
    const billValue = Number(billInput.value) 
    const tipValue = tipInput.value
    const tip = (billValue * tipValue / 100)
    const tipAmount = (billValue * tipValue / 100)  / peopleInput.value
    const tipBill = (tip + billValue)
    display.innerHTML = tipAmount.toFixed(2)
    text4.innerHTML = `$${tipBill.toFixed(2)}`
}

function per() {
  if(peopleInput.value >= 2){
    text.innerHTML = "Tip Per Person"
    const billValue = billInput.value
    let bill = billValue/peopleInput.value
    text2.innerHTML = 'Bill per person'
    text3.innerHTML = `$${(bill.toFixed(2))}`
  }else {
    text.innerHTML = "Your Tip"
    text2.innerHTML = ''
    text3.innerHTML = ''
  }
}
calculateTip();
billInput.addEventListener ('input', update)
tipInput.addEventListener ('input', update)
peopleInput.addEventListener ('input', update)
