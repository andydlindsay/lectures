const chai = require('chai');
const { doShortlyExpectingTruthy } = require('../04.js');
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

assert = chai.assert;

describe("doShortlyExpectingTruthy", function() {

  this.timeout(1000);

  before(() => {
    console.log(`LHL Note: "Timeout of 2000ms exceeded..." is a generic message from Mocha if our delayed execution doesn't happen.`)
    console.log(`          Mocha waits 2 seconds (by default) before giving up on the test. This error should go away once the callback is invoked.`);
  })

  it("calls/invokes the provided callback", (done) => {
    doShortlyExpectingTruthy(() => {
      assert.isOk(true, "expected callback to execute");
      done();
      return true;
    }, 10);
  });

  it("calls/invokes the provided callback with the provided data", (done) => {
    const data = 5;

    doShortlyExpectingTruthy((param) => {
      assert.strictEqual(param, data);
      done();
      return true;
    }, 10, data);
  });

  it("defers the execution/invocation of the provided callback function by the given ms delay (400ms)", (done) => {
    const before = new Date();
    doShortlyExpectingTruthy(() => {
      const after = new Date();
      assert.approximately(after - before, 400, 200);
      done();
      return true;
    }, 400);
  });

  it("defers the execution/invocation of the provided callback function by the given ms delay (200ms)", (done) => {
    const before = new Date();
    doShortlyExpectingTruthy(() => {
      const after = new Date();
      assert.approximately(after - before, 200, 120);
      done();
      return true;
    }, 200);
  });

  it("returns a promise object", () => {
    const promise = doShortlyExpectingTruthy(() => {
      return true;
    }, 10);
    assert.instanceOf(promise, Promise)
  });

  it("resolves promise when callback returns true (truthy)", () => {
    const promise = doShortlyExpectingTruthy(() => {
      return true;
    }, 10)
    assert.isFulfilled(promise, true);
  });

  it("resolves promise when callback returns a number (truthy)", () => {
    const promise = doShortlyExpectingTruthy(() => {
      return 5;
    }, 10)
    assert.isFulfilled(promise, 5);
  });

  it("resolves promise when callback returns a string (truthy)", () => {
    const promise = doShortlyExpectingTruthy(() => {
      return "hello";
    }, 10)
    assert.isFulfilled(promise, "hello");
  });

  it("rejects promise when callback returns undefined (falsy)", () => {
    const promise = doShortlyExpectingTruthy(() => {
      // return undefined;
    }, 10);
    assert.isRejected(promise, "Falsy value retrieved");
  });

  it("rejects promise when callback returns false (falsy)", () => {
    const promise = doShortlyExpectingTruthy(() => {
      return false;
    }, 10);
    assert.isRejected(promise, "Falsy value retrieved");
  });

  it("rejects promise when callback returns 0 (falsy)", () => {
    const promise = doShortlyExpectingTruthy(() => {
      return 0;
    }, 10);
    assert.isRejected(promise, "Falsy value retrieved");
  });

});
