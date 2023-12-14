const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', () => {
  const nameInput = document.getElementById('name');
  const newName = nameInput.value;

  const displayChoiceInput = document.getElementById('display-choice');
  const newDisplayChoice = displayChoiceInput.value;

  console.log('newName:', newName);
  console.log('newDisplayChoice:', newDisplayChoice);
});
