const request = require('request')
const getData = (callback)=>{
    const url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3c0674f3b28e45b68d9a036f179f4ed6`
    request({ url, json:true }, (error, response )=>{
        if(error) {
            callback('el code 8lt', undefined)
        }
        else{
            callback(undefined, response.body)
        }
    })
}
module.exports = getData