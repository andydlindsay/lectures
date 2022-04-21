const { assert } = require('chai');
const { fetchDataForUser } = require('../02.js');

describe("fetchDataForUser", function() {

  // in case the initial API call to github takes more than 2s, change the timeout to 2.5s
  this.timeout(2500);

  it("calls the provided callback", (done) => {
    const url = 'https://gist.githubusercontent.com/kvirani/f7d65576cc1331da1c98d5cad4f82a69/raw/4baad7566f0b6cd6f651c5d3558a015e226428b5/data.json';

    fetchDataForUser(url, 'mr_robot', (err, data) => {
      done();
    });
  });

  it("provides data via second argument, as an object", (done) => {
    const url = 'https://gist.githubusercontent.com/kvirani/f7d65576cc1331da1c98d5cad4f82a69/raw/4baad7566f0b6cd6f651c5d3558a015e226428b5/data.json';

    fetchDataForUser(url, 'mr_robot', (err, data) => {
      assert.isOk(data)
      done();
    });
  });

  it("provides expected data for given user via second argument", (done) => {
    const url = 'https://gist.githubusercontent.com/kvirani/f7d65576cc1331da1c98d5cad4f82a69/raw/4baad7566f0b6cd6f651c5d3558a015e226428b5/data.json';

    fetchDataForUser(url, 'mr_robot', (err, data) => {
      assert.deepEqual(data, { wins: 5, losses: 2 });
      done();
    });
  });

  it("provides expected data for given user via second argument (extra check)", (done) => {
    const url = 'https://gist.githubusercontent.com/kvirani/de703d588a2264d4f164e97641aa9cad/raw/7d5f5bfed2ebd8ee76dc8adb1b10a931857bfade/more.json';

    fetchDataForUser(url, 'hansel', (err, data) => {
      assert.deepEqual(data, { survived: true, hero: true });
      done();
    });
  });

  it("returns undefined (not an error) if the username is not in the response data", (done) => {
    const url = 'https://gist.githubusercontent.com/kvirani/f7d65576cc1331da1c98d5cad4f82a69/raw/4baad7566f0b6cd6f651c5d3558a015e226428b5/data.json';

    fetchDataForUser(url, 'some_missing_person', (err, data) => {
      assert.isNull(err);
      assert.isUndefined(data);
      done();
    });
  });

  it("sets error object (first argument of callback) to null when things go well", (done) => {
    const url = 'https://gist.githubusercontent.com/kvirani/f7d65576cc1331da1c98d5cad4f82a69/raw/4baad7566f0b6cd6f651c5d3558a015e226428b5/data.json';

    fetchDataForUser(url, 'mr_robot', (err, data) => {
      assert.isNull(err);
      done();
    });
  });

  it("sets data as null and provides error object when things don't go well (nonexistent domain: https://noT-ath1nG11.com/)", (done) => {
    const url = 'https://noT-ath1nG11.com/';

    fetchDataForUser(url, 'mr_robot', (err, data) => {
      assert.isOk(err);
      assert.instanceOf(err, Error);
      assert.isNull(data);
      done();
    });
  });

});
