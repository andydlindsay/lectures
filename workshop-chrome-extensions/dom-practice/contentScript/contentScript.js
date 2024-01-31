// console.log('inside the content script');

// document.title = 'whatever';

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
