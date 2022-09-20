const chai = require('chai');
should = chai.should();
expect = chai.expect;
assert = chai.assert;

describe("string",function(){

    before(function() {
        // runs once before the first test in this block
        console.log("before");
    })

    after(function() {
        // runs once after the first test in this block
        console.log("after");
    })

    beforeEach(function() {
        // runs once beforeEach the first test in this block
        console.log("beforeEach");
    })

    afterEach(function() {
        // runs once afterEach the first test in this block
        console.log("afterEach");
    })

    let name ="hango"
    it("should be a type string",function(){
        name.should.be.a("string")
        expect(name).to.a("string")
        assert.typeOf(name,"string")
    })

    it("it should contain hango",function(){
        name.should.not.equal("kate")
        expect(name).equal("hango")
        // assert.equal(name,"vicks")
    })

})




// To GO Directly to the browser


// const cp =   require("child_process")

// cp.exec("start chrome https://www.cardekho.com/newcars")