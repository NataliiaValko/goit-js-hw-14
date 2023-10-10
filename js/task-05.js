const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const handleNameInput = ({ target: { value } }) => {
  nameOutputRef.textContent = value.trim() ? value.trim() : 'Anonymous';
};

nameInputRef.addEventListener('input', handleNameInput);
