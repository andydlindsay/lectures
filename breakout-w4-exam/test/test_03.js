const { assert } = require('chai');
const { sumFileData } = require('../03.js');
const fs = require('fs');

describe("sumFileData", function() {

  // no need to wait too long for fs reads
  this.timeout(200);

  let oldReadFileSync;

  const clearFiles = function() {
    try {
      fs.readdirSync('./tempdata').forEach(name => fs.unlinkSync(`./tempdata/${name}`) );
      fs.rmdirSync('./tempdata');
    } catch(e) {
      // no biggie, fail silently on this one.
    }
  }

  // clear and recreate the tempdata folder
  before(() => {
    oldReadFileSync = fs.readFileSync;
    fs.readFileSync = function() {
      assert.isOk(false, "Cannot use this function! Use the asynchronous version for this challenge, please...");
    }
  });

  after(() => {
    fs.readFileSync = oldReadFileSync;
    clearFiles();
  });

  beforeEach(() => {
    clearFiles();
    fs.mkdirSync('./tempdata');
  });

  it("calls the provided callback", (done) => {
    const filePath1 = "./tempdata/file1.txt";
    const filePath2 = "./tempdata/file2.txt";

    fs.writeFileSync(filePath1, "42");
    fs.writeFileSync(filePath1, "24");

    sumFileData(filePath1, filePath2, () => {
      done();
    })
  });

  it("calls the provided callback with the resulting value (42 + 24 = 66)", (done) => {
    const filePath1 = "./tempdata/file1.txt";
    const filePath2 = "./tempdata/file2.txt";

    fs.writeFileSync(filePath1, "42");
    fs.writeFileSync(filePath2, "24");

    sumFileData(filePath1, filePath2, (err, result) => {
      assert.strictEqual(result, 66);
      assert.isNull(err);
      done();
    })
  });

  it("supports negative numbers (33 + -11 = 22)", (done) => {
    const filePath1 = "./tempdata/file1.txt";
    const filePath2 = "./tempdata/file2.txt";

    fs.writeFileSync(filePath1, "33");
    fs.writeFileSync(filePath2, "-11");

    sumFileData(filePath1, filePath2, (err, result) => {
      assert.strictEqual(result, 22);
      assert.isNull(err);
      done();
    })
  });

  it("supports decimals (1.5 + 3.5 = 5)", (done) => {
    const filePath1 = "./tempdata/file1.txt";
    const filePath2 = "./tempdata/file2.txt";

    fs.writeFileSync(filePath1, "1.5");
    fs.writeFileSync(filePath2, "3.5");

    sumFileData(filePath1, filePath2, (err, result) => {
      assert.strictEqual(result, 5);
      assert.isNull(err);
      done();
    })
  });

  it("uses the provided filenames", (done) => {
    const filePath1 = "./tempdata/file_aaa.txt";
    const filePath2 = "./tempdata/file_bbb.txt";

    fs.writeFileSync(filePath1, "1");
    fs.writeFileSync(filePath2, "3");

    sumFileData(filePath1, filePath2, (err, result) => {
      assert.strictEqual(result, 4);
      done();
    })
  });

  it("sets err (first argument) with fs error if there is a problem with the first file (bad file path)", (done) => {
    const filePath1 = "./tempdata/file_aaa.txt";
    const filePath2 = "./tempdata/file_bbb.txt";

    fs.writeFileSync(filePath2, "3");

    sumFileData(filePath1, filePath2, (err, result) => {
      assert.isOk(err);
      assert.instanceOf(err, Error);
      assert.isNull(result);
      done();
    })
  });

  it("sets err (first argument) with fs error if there is a problem with the second file (bad file path)", (done) => {
    const filePath1 = "./tempdata/file_aaa.txt";
    const filePath2 = "./tempdata/file_bbb.txt";

    fs.writeFileSync(filePath1, "3");

    sumFileData(filePath1, filePath2, (err, result) => {
      assert.isOk(err);
      assert.instanceOf(err, Error);
      assert.isNull(result);
      done();
    })
  });

});
