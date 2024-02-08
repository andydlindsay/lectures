// console.log('inside the content script');

// document.title = 'whatever';

chrome.runtime.sendMessage({ content: 'hello world', friends: [] })
  .then((response) => {
    console.log('message response in contentScript', response);
  });

const tags = document.getElementsByTagName('a');

const tagText = [];

for (const tag of tags) {
  // if (tag.textContent.includes('i')) {
    // tag.style = 'background-color: yellow;';
    // tag.textContent = 'WTF is happening Bruce???';
  // }
  tagText.push(tag.textContent);

  tag.addEventListener('click', (event) => {
    // event.preventDefault();

    // tag.classList.add('rotate');
  });
}

chrome.storage.local.set({
  tagText
});
