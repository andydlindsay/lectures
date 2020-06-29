it('fails', () => {
  throw new Error('bad things happened');
});

it('fails due to assertion failure', () => {
  assert.equal(1, 2);
});
