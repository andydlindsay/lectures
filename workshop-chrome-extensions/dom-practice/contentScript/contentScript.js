// console.log('inside the content script');

const incrementButton = document.createElement('button');
incrementButton.textContent = 'increment';
incrementButton.style = 'font-size: 2em;';

const resetButton = document.createElement('button');
resetButton.textContent = 'reset';
resetButton.style = 'font-size: 2em;';

const createHandler = (type) => {
  return () => {
    chrome.runtime.sendMessage({ type });
  };
};

incrementButton.addEventListener('click', createHandler('increment'));
resetButton.addEventListener('click', createHandler('reset'));

document.body.prepend(incrementButton, resetButton);


// document.title = 'whatever';

// chrome.runtime.sendMessage({ content: 'hello world', friends: [] })
//   .then((response) => {
//     console.log('message response in contentScript', response);
//   });

// document.getElementsByTagName('h1')[0].addEventListener('click', () => {
//   chrome.runtime.sendMessage('h1 was clicked');
// });

// const tags = document.getElementsByTagName('a');

// const tagText = [];

// for (const tag of tags) {
//   // if (tag.textContent.includes('i')) {
//     // tag.style = 'background-color: yellow;';
//     // tag.textContent = 'WTF is happening Bruce???';
//   // }
//   tagText.push(tag.textContent);

//   tag.addEventListener('click', (event) => {
//     // event.preventDefault();

//     // tag.classList.add('rotate');
//   });
// }

// chrome.storage.local.set({
//   tagText
// });
