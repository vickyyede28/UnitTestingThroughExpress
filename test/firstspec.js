const assert = require("assert")

describe("It's My First Ever Test Case",function() {
    it("Check The Value",function() {
        assert.equal([1,2,3].indexOf(2),1)
    })

})