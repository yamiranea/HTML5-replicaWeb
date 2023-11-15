const counterElements = document.querySelectorAll('.counter');

const targetNumbers = [231, 385, 159, 127, 211];

const speed = 2;

function animateCounter(counterElement, targetNumber) {
  let currentNumber = 0;

  const interval = setInterval(() => {
    currentNumber += speed;

    
    counterElement.textContent = currentNumber;

    
    if (currentNumber >= targetNumber) {
      counterElement.textContent = targetNumber;
      clearInterval(interval);
    }
  }, 1000 / 60); 
}

window.addEventListener('scroll', () => {
  counterElements.forEach((counterElement, index) => {
    const rect = counterElement.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animateCounter(counterElement, targetNumbers[index]);
    }
  });
});
