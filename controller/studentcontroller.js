const { response } = require("express")

class student  {
    constructor(){

    }

    home(type){
        let data = this.getInfo(type,1)
        this.getInfo(type,2)
        this.getInfo(type,3)
        return data + 5
    }
    userId(){
        return 12
    }
    getInfo(type,status){
        return type
    }

    finalMarks(total){
        let external = this.getExternal(total)
        let internal = this.getInternal(total)
        let finalSum = external + internal + 5;
        return finalSum
    }

    getExternal(total){
        return total + 1
    }

    getInternal(total){
        return total - 1
    }

    dbdata(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(10),1500)
        })
    }

    thirdPartyApi (){
        return new Promise((resolve,reject)=>{
            axios.get("https://www.mygov.in/covid-19")
            .then(response=>{
                resolve(response.data)
            })
            .catch(error=>{
                reject(error)
            })
        })
    }
}

module.exports = student