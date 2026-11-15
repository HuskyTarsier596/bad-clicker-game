const button = document.getElementById(`incrementButton`)
const buy10Button = document.getElementById(`buy10Button`)
let clickAmount = 1  
let numberOfClicks = 0

button.addEventListener('click', () => {
  numberOfClicks += clickAmount;
  document.getElementById("numberOfClicks").textContent = numberOfClicks;
});

buy10Button.addEventListener('click', () => {
  if (numberOfClicks >= 10*clickAmount) {
    numberOfClicks -= 10*clickAmount;
    clickAmount += 1;
    document.getElementById("numberOfClicks").textContent = numberOfClicks;
    document.getElementById("clickAmount").textContent = clickAmount;
  }
});