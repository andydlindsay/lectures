const encrypt = function (str) {
  const output = [];
  for (const index in str) {
    const charCode = str.charCodeAt(index);
    let newCharCode = 32;
    if (charCode >= 97) {
      newCharCode = charCode + 13 > 122 ? charCode - 13 : charCode + 13;
    } else if (charCode >= 65) {
      newCharCode = charCode + 13 > 90 ? charCode - 13 : charCode + 13; 
    }
    output.push(String.fromCharCode(newCharCode));
  }
  return output.join('');
};

const alphabet = 'abcdefghijklm';
console.log(alphabet);
console.log(encrypt(alphabet));
