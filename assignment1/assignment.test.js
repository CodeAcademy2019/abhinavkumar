const game = require('./assignment');

test('Test to check if [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,9,1] returns value ', () => {
  expect(game()).toEqual(20);
})

test('Test to check if [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,1] returns value ', () => {
  expect(game()).toEqual(21);
})

test('Test to check if [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10] returns value ', () => {
  expect(game()).toEqual(30);
})

test('Test to check if [10,8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] returns value ', () => {
  expect(game()).toEqual(21);
})