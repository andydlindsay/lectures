const assert = require('assert').strict;
const { filesize } = require('../q4');

describe('tests for q4', () => {

  it('can correctly return the file size', () => {
    let actual = filesize(1);
    let expected = '1B';
    assert.equal(actual, expected);
    
    actual = filesize(1000);
    expected = '1kB';
    assert.equal(actual, expected);
    
    actual = filesize(1000000);
    expected = '1MB';
    assert.equal(actual, expected);
    
    actual = filesize(1500000);
    expected = '1.5MB'; 
    assert.equal(actual, expected);

    actual = filesize(1250000000);
    expected = '1.25GB';
    assert.equal(actual, expected);
    
    actual = filesize(9000000000000);
    expected = '9TB';
    assert.equal(actual, expected);
  });

});
