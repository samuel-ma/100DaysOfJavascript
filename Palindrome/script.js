

const name = document.querySelector(".button");
const result = document.querySelector(".result");

button.addEventListener("click", palindrome);

function palindrome(){
  const word = document.querySelector(".input-text").value;
  let len = word.length;
  let start = word.substring(0, Math.floor(len/2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
  let flip = end.split('').reverse().join('');
  if(start == flip){
    result.innerHTML = `${word.toUppercase} is a Palindrome`;
  } else {
    result.innerHTML = `${word.toUpperCase} is not a Palindrome`;
  }

}
