const forEach = (arr, cb) => {
  for (const elem of arr) {
    cb(elem);
  }
};

const marks = ['Wahlberg', 'Zuckerberg', 'Twain'];

forEach(marks, (mark) => {
  console.log(`hey there Markie ${mark}`);
});
