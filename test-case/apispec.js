const { expect } = require("chai")
const  chai = require("chai")
assert = chai.assert
should = chai.should()    
expert = chai.expect

var server = require("../index")

let chaiHttp = require("chai-http")
chai.use(chaiHttp)

describe("Api check",function(){

    it("user get",function(){
        chai.request(server)
        .get("/user")
        .end((err,response)=>{
            expect(response.status).to.be.equal(200)
            expect(response.body).to.have.all.keys("statusText","data")

        })
    })
})