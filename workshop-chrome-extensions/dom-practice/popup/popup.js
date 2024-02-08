const countDiv = document.getElementById('count');
const incButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

const updateCountDiv = (count) => {
  console.log('updateCountDiv', count);
  countDiv.textContent = count ? count : 'no count';
};

chrome.runtime.sendMessage('get-count');
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'return-count') {
    updateCountDiv(message.payload);
  }
});

incButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'increment' });
});

resetButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'reset' });
});

// incButton.addEventListener('click', () => {
//   chrome.storage.local.get()
//     .then((results) => {
//       const newCount = typeof results.count === 'number' ? results.count + 1 : 1;
//       chrome.storage.local.set({ count: newCount })
//         .then(() => {
//           updateCountDiv(newCount);
//         });
//     });
// });
