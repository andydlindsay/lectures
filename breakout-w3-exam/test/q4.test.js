const { assert } = require('chai');
const { filesize } = require('../q4.js');

describe("filesize", () => {
  it("returns 1 for a filesize of 1 byte", () => {
    assert.equal(filesize(1), "1B");
  });

  it("returns 100B for a filesize smaller than 1000B", () => {
    assert.equal(filesize(100), "100B");
  });

  it("returns 1kB for 1000B", () => {
    assert.equal(filesize(1000), "1kB");
  });

  it("returns 1.2MB for 1200000B", () => {
    assert.equal(filesize(1200000), "1.2MB");
  });

  it("returns 1.5MB for 1500000 bytes", () => {
    assert.equal(filesize(1500000), "1.5MB");
  });

  it("returns 1.33GB for 1330000000 bytes", () => {
    assert.equal(filesize(1330000000), "1.33GB");
  });

  it("returns 8TB for 8000000000000 bytes", () => {
    assert.equal(filesize(8000000000000), "8TB");
  });
});
