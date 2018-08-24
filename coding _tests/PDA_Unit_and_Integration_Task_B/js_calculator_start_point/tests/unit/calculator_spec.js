var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it should be able to add', function () {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
  });


  it('it should be able to subtract', function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
  });

  it('it should be able to multiply', function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
  });

  it('it should be able to divide', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
  });


  it('it can click multiple numbers', function () {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 123)
  })

  it('it can click an operator', function () {
    calculator.operatorClick('+');
    assert.strictEqual(calculator.previousOperator, '+')
  });

  it('it can chain operators together', function () {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 12)
  });

  it('it can clear running total', function () {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 12)
  });

});
