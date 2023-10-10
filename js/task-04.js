const counterRef = document.querySelector('#counter');
const counterValueRef = document.querySelector('#value');

let counterValue = 0;

const handleCounterClick = ({ target }) => {
  switch (target.dataset.action) {
    case 'decrement':
      counterValue -= 1;
      break;

    case 'increment':
      counterValue += 1;
      break;

    default:
      break;
  }

  counterValueRef.textContent = counterValue;
};

counterRef.addEventListener('click', handleCounterClick);
