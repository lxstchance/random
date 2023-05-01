const innerResult = document.querySelector('.inner__result');
const btn = document.querySelector('.inner__btn');
const minRange = document.querySelector('.range__min');
const minText = document.querySelector('.range__min-result')
const maxRange = document.querySelector('.range__max');
const maxText = document.querySelector('.range__max-result')

minText.textContent = minRange.value;
maxText.textContent = maxRange.value;

minRange.addEventListener('change', function () {
    minText.textContent = this.value;
})

maxRange.addEventListener('change', function () {
    maxText.textContent = this.value;
})


function randomNumber(min, max) {
    const result = Math.floor((Math.random() * (max - min) + min));
    innerResult.textContent = `Держи число ${result}`;
}

btn.addEventListener('click', randomNumber(-10, 10));

