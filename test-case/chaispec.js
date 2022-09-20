const { expect } = require("chai")
const  chai = require("chai")
assert = chai.assert
should = chai.should()    
expert = chai.expect

//########### ASSERT #######################//

describe("Assert Test",function(){
    const username =  "code improve"
    const mylist = {
        item:[{
            id:1,name:"nancy"
        }],
        title:"user list"
    }
    it("Check String",function(){
        assert.typeOf(username,"string")
    })

    it("Check Value",function(){
        assert.equal(username,"code improve")
    })

    it("Check lenght",function(){
        assert.lengthOf(mylist.item,1)
    })
})


//########### SHOULD #######################//

describe("should check", function(){
    const username =  "code improve"
    const mylist = {
        item:[{
            id:1,name:"nancy"
        },{id:2,age:23}],
        title:"user list"
    }
    it("should be string", function(){
        username.should.be.a("string")
    })

    it("should value",function(){
        username.should.equal("code improve")
    })

    it("should check lenght",function(){
        mylist.should.have.property("item").with.lengthOf(2)
    })
})


//############ EXPECT ###################//

describe("Check Expect",function(){
    const username =  "code improve"
    const mylist = {
        item:[{
            id:1,name:"nancy"
        },{id:2,age:23}],
        title:"user list",
        address:{
            country:"India",
            phone:["0123456789","9876543210"]
        }
    }
    
    it("expect string",function(){
        expect(username).to.be.a("string")
    })

    it("expect value",function(){
        expect(username).to.equal("code improve")
    })

    it("expect lenght",function(){
        expect(username).to.have.lengthOf(12)
    })

    it("object lenght",function(){
        expect(mylist).to.have.property("item").with.lengthOf(2)
    })

    it("api object match",function(){
        expect(mylist).to.have.all.keys("item","title","address")
    })

    it("phone no",function(){
        expect(mylist).to.have.nested.property("address.phone[1]")
    })

    it("country name",function(){
        expect(mylist).to.have.nested.include({"address.country":'India'})
    })

    it("phone no",function(){
        expect(mylist).to.have.nested.include({"address.phone[0]":"0123456789"})
    })
})