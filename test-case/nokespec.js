// const sinon = require("sinon")
// const chai =  require("chai")
// const expect = chai.expect
// const student = require("../controller/studentcontroller")
// const studentobj = new student();

// const nock =  require("nock")

// describe("nock test suit",function(){

//     it("api testing ",function(done){
//         var obj ={status:"ok",statuscode:200,data:[]}

//         const apihit = nock("https://www.mygov.in")
//         .get("/covid-19")
//         .reply(200,obj)

//         studentobj.thirdPartyApi()
//         .then(function(record){
//             expect(record).to.be.equal(obj)
//             done()
//         })
//         .catch(Error=>{
//             done(new Error("error:-"+error))
//         })
//     })
// })




// Nock is a library that helps us provide custom response to http request 
// made inout application can use during testing