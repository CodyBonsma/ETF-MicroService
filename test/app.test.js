// during the test the env variable is set to 'test'
process.env.NODE_ENV = "test";

// require the dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

describe("ETFs", () => {
  describe("/GET etfs", () => {
    it("it should get all the etfs", (done) => {
      chai
        .request(server)
        .get("/etfs")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(2310);
          done();
        });
    });
  });

  describe("/GET/:id etfs", () => {
    it("it should GET the course within the given id", (done) => {
      chai
        .request(server)
        .get("/etfs/444")
        .end((err, res) => {
          console.log("RESPONSE HERE:", res.body);
          res.should.have.status(200);
          res.body.should.have.property("fund_long_name");
          res.body.should.have.property("fund_category");
          res.body.should.have.property("fund_family");
          res.body.should.have.property("fund_symbol");
          done();
        });
    });
  });
});
