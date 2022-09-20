const sinon = require("sinon")
const chai =  require("chai")
const expect = chai.expect
const student = require("../controller/studentcontroller")
const student1 = require("../controller/usercontroller")
const studentobj = new student();
const chaiaspromise = require("chai-as-promised")
chai.use(chaiaspromise)


describe("----------PROMISE---------", function(){

    it("Normal value funtion",function(done){
    //   expect(studentobj. dbdata()).to.be.equal(11)

      studentobj.dbdata().then(function(result){
        expect(result).to.be.equal(10)
        done()
      })
    })

    it("Chai promised value funtion",function(){
        this.timeout(0)
        return expect(studentobj.dbdata()).to.eventually.equal(10)
      })
    
      it("otp",function(){
        this.timeout(0)
        return expect(student1.newsdata()).to.eventually.have.deep.property("otp")
      })
})