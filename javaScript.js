const button = document.getElementById(`incrementButton`)
const buy10Button = document.getElementById(`buy10Button`)
const buy1CPSButton = document.getElementById(`scorePerSecond1Button`)
let clickAmount = 1  
let numberOfClicks = 0
let cPS = 0


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

buy1CPSButton.addEventListener('click', () => {
  if (numberOfClicks >= 100*(cPS*3)) {
    numberOfClicks -= 100*(cPS*3);
    cPS += 1;
    document.getElementById("cPS").textContent = cPS;
  }
})

setInterval(() => {
  numberOfClicks += cPS;
  document.getElementById("numberOfClicks").textContent = numberOfClicks;
}, 1000);