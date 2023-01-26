const server = require("./http");
const request = require("supertest");

describe("testing the server", () => {
    describe("testing root route 123 abc", () => {
        //the test that should run
        it("/should get back a 200", (done) => {
            request(server).get("/").expect(200).end((err) => {
                if(err){
                    throw err;
                } else {
                    done();
                }
            })
        })
    })
})

describe("testing the /data route", () => {
    it("/data should get back a 200", (done) => {
        request(server).get("/data").expect(200).end((err) => {
            if(err){
                throw err;
            } else {
                done();
            }
        })
    });

    it("/data should display my name", (done) => {
        request(server).get("/data").expect(200).end((err, response) => {
            if(err){
                throw err;
            } else {
                console.log(response.body.data.name);
                expect(response.body.data.name).toBe("grace")
                done();
            }
        })
    })
})