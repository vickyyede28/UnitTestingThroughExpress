const sinon = require("sinon")
const chai =  require("chai")
const expect = chai.expect
const student = require("../controller/studentcontroller")
const studentobj = new student();

describe("----------STUB---------", function(){

    it("No of arguments called in funtion",function(){
        const stub = sinon.stub(studentobj,"getInternal")
        stub.withArgs(40).returns(10)
        expect(studentobj.finalMarks(40)).to.be.equal(56);
    })
})



// Stub is used to customise the result and use according to us.