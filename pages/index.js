const innerResult = document.querySelector('.inner__result');
const btn = document.querySelector('.inner__btn');


function randomNumber() {
    const result = Math.floor(Math.random() * 10);
    innerResult.textContent = `Держи число ${result}`;
}

btn.addEventListener('click', randomNumber);