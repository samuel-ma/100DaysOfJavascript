

const number = document.querySelector(".number");
const button = document.querySelector(".generate");

const generateNumber = () => {
  const randomNumber =  Math.floor(Math.random() * 10 + 1); 
  number.innerHTML = randomNumber;
}

button.addEventListener("click", generateNumber);
