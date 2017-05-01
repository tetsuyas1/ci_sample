var assert = require('assert');

const Calc = require("../calc");
const c = new Calc();
describe('Calc', function() {
  it("",()=>{
    assert(c.plus(1,3),3);
  })
});
