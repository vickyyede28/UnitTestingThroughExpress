const sinon = require("sinon")
const chai =  require("chai")
const expect = chai.expect
const student = require("../controller/studentcontroller")
const studentobj = new student();

describe("----------STUB---------", function(){

    it("COUNT funtion",function(){
        const mock = sinon.mock(studentobj)

        const expt = mock.expects("getInternal")
        expt.exactly(1)
        expt.withArgs(40)
        studentobj.finalMarks(40)

        mock.verify()
    })
})



//HERE WE HAVE TO CHECK A FUNCTION IS CALLED HOW MANY TIMES AND WITH WHICH ARGUMENT