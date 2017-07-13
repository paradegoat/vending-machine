const assert = require("assert");
var supertest = require("supertest");
var should = require("should");
var api = supertest('http://localhost:3000')

describe("vend", function () {
  it("Index page should return all inventories", function (done) {
    api
   .get("/")
   .expect("Content-type",/json/)
   .expect(200) // THis is HTTP response
   .end(function(err,res){
     if (err) return done(err);
     done();
   });

  });

  it("It should accept money from users", function (done) {
    api
   .post("api/customer/items/purchases")
   .send({title:'test', text:'test'})
   .set('Accept', 'application/json')
  //  .expect("Content-type",/json/)
   .expect(200) // THis is HTTP response
   .end(function(err,res){
     if (err) return done(err);
     done();
   });

  });
});
// module.exports = vendTest;
