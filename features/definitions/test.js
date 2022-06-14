const {Given, When, Then}  = require('@cucumber/cucumber');
const {expect} = require('chai')

// data
let sum = 0;
let difference = 0;
let product = 0;
let division = 0;

Given('{int} and {int}', function (int, int2) {
 
});

// adding
When('adding {int} and {int}', function (int, int2) {
   sum = int + int2;
});
Then('the sum should be {int}', function (int) {
  expect(int).to.equal(sum);
});

// subtracting
When('subtracting {int} and {int}', function (int, int2) {
  difference = int - int2;
});

Then('the difference should be {int}', function (int) {
  expect(int).to.equal(difference);
});

// multiply
When('Multiplying {int} and {int}', function (int, int2) {
  product = int * int2;
});
Then('the product should be {int}', function (int) {
  expect(int).to.equal(product)
});

// divide
When('dividing {int} and {int}', function (int, int2) {
  division = int / int2;
});
Then('the division should be {float}', function (float) {
  expect(float).to.equal(division)
});