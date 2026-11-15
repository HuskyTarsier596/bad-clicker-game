const button = document.getElementById(`incrementButton`)

let numberOfClicks = 0

button.addEventListener('click', () => {
  numberOfClicks++;
  document.getElementById("numberOfClicks").textContent = numberOfClicks;
  
  if (numberOfClicks === 100) {
    alert("You Win! Good Job!")
  }
});
