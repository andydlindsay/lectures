const woop = () => {
  console.log('Woop woop!');
};

const andre = () => {
  console.log('Hey from andre');
};

setTimeout(andre, 3000);
setTimeout(woop, 2000);

// will we see "woop woop" before or after "Hey from andre"?
