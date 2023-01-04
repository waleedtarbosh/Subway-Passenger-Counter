let passengerCount = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
function boardTrain() {
   
  passengerCount++;
  countEl.textContent = passengerCount
  console.log(`Welcome aboard! There are now ${passengerCount} passengers on the train.`);
}

function exitTrain() {
  if (passengerCount > 0) {
    passengerCount--;
    countEl.textContent = passengerCount
        console.log(`Thank you for riding! There are now ${passengerCount} passengers on the train.`);

  } else {
    console.log('There are no passengers on the train.');
  }
}

function save() {
    let countStr = passengerCount + " - " ;
    saveEl.textContent +=countStr
    countEl.textContent = 0
    passengerCount = 0
}
console.log("Let's count people on the subway!")
