var request = require("request");
describe("Hello World Server", function() {
    describe("GET /", function() {
      it("returns status code 200", function(done) {
        request.get("http://localhost:3000", function(error, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        });
      });
  
      it("returns Hello World", function(done) {
        request.get("http://localhost:3000", function(error, response, body) {
          expect(body).toBe("Hello World");
          done();
        });
      });
    });
  });