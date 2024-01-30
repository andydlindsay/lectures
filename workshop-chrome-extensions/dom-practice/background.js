chrome.runtime.onInstalled.addListener((details) => {
  console.log('details', details);

  chrome.contextMenus.create({
    title: 'Test Context Menu 1',
    id: 'parent',
    contexts: [
      'page',
      'selection'
    ],
  });

  chrome.contextMenus.create({
    title: 'Child Context Menu Item 1',
    id: 'child one',
    parentId: 'parent',
  });

  chrome.contextMenus.create({
    title: 'Child Context Menu Item 2',
    id: 'child two',
    parentId: 'parent',
  });

  chrome.contextMenus.create({
    type: 'separator',
    id: 'child separator',
    parentId: 'parent',
  });

  chrome.contextMenus.create({
    title: 'Child Context Menu Item 3',
    id: 'child three',
    parentId: 'parent',
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log('args', info);
  console.log('tab', tab);
});
