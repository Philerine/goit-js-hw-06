let counterValue = 0;

const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
};

refs.increment.addEventListener('click', onIncrementClick);
refs.decrement.addEventListener('click', onDecrementClick);

function onIncrementClick(){
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
}

function onDecrementClick(){
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
}
