chrome.runtime.onMessage.addListener(async (message, sender, response) => {
  console.log('sender', sender);
  console.log("message received", message);

  const { count } = await chrome.storage.local.get("count");
  let newCount = count || 0;

  if (message.type === "get-count") {
    return chrome.runtime.sendMessage({
      type: "return-count",
      payload: newCount,
    });
  }

  if (message.type === "increment") {
    newCount++;
  }
  if (message.type === "decrement") {
    newCount--;
  }

  if (message.type === "reset") {
    newCount = 0;
  }

  await chrome.storage.local.set({ count: newCount });
  chrome.runtime.sendMessage({ type: "return-count", payload: newCount });
});

chrome.runtime.onInstalled.addListener((details) => {
  console.log('details', details);
});

// chrome.runtime.onInstalled.addListener((details) => {
//   // set default values
//   chrome.storage.local.set({ count: 100 });

//   chrome.contextMenus.create({
//     title: 'Search with default search engine',
//     id: 'parent',
//     contexts: [
//       // 'page',
//       'selection'
//     ],
//   });

//   // chrome.contextMenus.create({
//   //   title: 'Child Context Menu Item 1',
//   //   id: 'child one',
//   //   parentId: 'parent',
//   // });

//   // chrome.contextMenus.create({
//   //   title: 'Child Context Menu Item 2',
//   //   id: 'child two',
//   //   parentId: 'parent',
//   // });

//   // chrome.contextMenus.create({
//   //   type: 'separator',
//   //   id: 'child separator',
//   //   parentId: 'parent',
//   // });

//   // chrome.contextMenus.create({
//   //   title: 'Child Context Menu Item 3',
//   //   id: 'child three',
//   //   parentId: 'parent',
//   // });
// });

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   console.log('info', info);
//   // console.log('tab', tab);

//   if (info.menuItemId === 'parent') {
//     // chrome.search.query({
//     //   disposition: 'NEW_TAB',
//     //   text: `javascript ${info.selectionText}`,
//     // });
//     chrome.tabs.create({
//       url: `https://www.imdb.com/find/?q=${info.selectionText}&ref_=nv_sr_sm`,
//     });
//   }
// });

// chrome.storage.onChanged.addListener((changes) => {
//   console.log(changes);
// });

// chrome.runtime.onMessage.addListener((message, sender, response) => {
//   console.log('message', message, 'sender', sender);

//   chrome.notifications.create(null, {
//     message: message.toString(),
//     title: 'title',
//     iconUrl: '/images/webpage.png',
//     type: 'basic',
//   });

//   response({ content: 'message received loud and clear!', user: {}, topics: [] });
// });
