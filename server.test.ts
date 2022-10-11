// Create your own HTTP server

// Use the techniques you've learnt so far to create your own HTTP server with Express. Your server should:

// Automatically recompile and restart when you make changes
// Have a GET route that sends a JSON response
// Have an integration test for the GET route
// Use an environment variable to configure the server port

import supertest from "supertest";

import app from "./app";

const request = supertest(app)

test("GET /alunni", async() => {
    const response = await request
        .get("/alunni")
        .expect(200)
        .expect("Content-type", /application\/json/)

        expect(response.body).toEqual([
            {name: "Luca"},
            {name: "Paolo"}
        ])
})