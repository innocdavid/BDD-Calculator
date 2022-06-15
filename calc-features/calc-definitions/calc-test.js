const {Given, When, Then, Before, After}  = require('@cucumber/cucumber');
const {expect} = require('chai')

// data
let sum = 0;
let minus = 0;
let product = 0;
let divisor = 0;

Given('the numbers {int} and {int}', function (int, int2) {
 
});

// addition
When('adding {int} and {int}', function (int, int2) {
  sum = int + int2;
});
Then('the sum should be {int}', function (int) {
   expect(int).to.equal(sum);
});

// subtraction
When('subtracting {int} and {int}', function (int, int2) {
  minus = int - int2;
});
Then('the difference should be {int}', function (int) {
  expect(int).to.equal(minus);
});

// multiplication
When('multiplying {int} and {int}', function (int, int2) {
  product = int * int2;
});
Then('the product should be {int}', function (int) {
  expect(int).to.equal(product);
});

// division
When('dividing {int} and {int}', function (int, int2) {
  divisor = int / int2;
});
Then('the division should be {int}', function (int) {
  expect(int).to.equal(divisor);
});