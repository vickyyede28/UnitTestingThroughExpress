const sinon = require("sinon")
const chai =  require("chai")
const expect = chai.expect
const student = require("../controller/studentcontroller")
const studentobj = new student();

describe("----------SPAY---------", function(){

    it("check function",function(){
        expect(studentobj.userId()).to.be.equal(12)
    })

    // it("No of funtion Call",function(){
    //     const spyobj = sinon.spy(studentobj,"getInfo")
    //     studentobj.home(5)
    //     // expect(spyobj.calledOnce).to.be.false
    //     expect(spyobj.calledThrice).to.be.true
    // })

    it("No of arguments called in funtion",function(){
        const spyobj = sinon.spy(studentobj,"getInfo")
        studentobj.home(5)
        // expect(spyobj.calledOnce).to.be.false
        expect(spyobj.calledWith(5)).to.be.true;
    })
})
