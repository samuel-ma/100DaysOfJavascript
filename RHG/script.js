

const hex = document.querySelector(".hex");
const button = document.querySelector(".generate");

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
}

button.addEventListener("click", generateColor);

