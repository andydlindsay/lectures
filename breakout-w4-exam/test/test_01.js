const { assert } = require('chai');
const { doShortly } = require('../01.js');

describe("doShortly", function() {

  // switch from 2 second default mocha timeout to 1 second.
  this.timeout(1000);

  before(() => {
    console.log(`LHL Note: "Timeout of 2000ms exceeded..." is a generic message from Mocha if our delayed execution doesn't happen.`)
    console.log(`           Mocha waits 2 seconds (by default) before giving up on the test. This error should go away once the callback is invoked.`);
  })

  it("calls/invokes the provided callback", (done) => {
    doShortly(() => {
      assert.isOk(true, "expected callback to execute");
      done();
    }, 10);
  });

  it("calls/invokes the provided callback with the provided data", (done) => {
    const data = 5;

    doShortly((param) => {
      assert.strictEqual(param, data);
      done();
    }, 10, data);
  });

  it("defers the execution/invocation of the provided callback function by the given ms delay (800ms)", (done) => {
    const before = new Date();
    doShortly(() => {
      const after = new Date();
      assert.approximately(after - before, 800, 200);
      done();
    }, 800);
  });

  it("defers the execution/invocation of the provided callback function by the given ms delay (200ms)", (done) => {
    const before = new Date();
    doShortly(() => {
      const after = new Date();
      assert.approximately(after - before, 200, 120);
      done();
    }, 200);
  });

  it("returns undefined despite calling the callback", (done) => {
    const results = doShortly(() => {
      assert.isOk(true, "expected callback to execute");
      done();
    }, 10);
    assert.isUndefined(results);
  });

});
