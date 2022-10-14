// Create your own HTTP server

// Use the techniques you've learnt so far to create your own HTTP server with Express. Your server should:

// Automatically recompile and restart when you make changes V
// Have a GET route that sends a JSON response
// Have an integration test for the GET route
// Use an environment variable to configure the server port

import "dotenv/config";
import express from "express";
import "express-async-errors"; 

const app = express();

app.get("/alunni", (request, response) => {
    response.json([
        {name: "Luca"},
        {name: "Paolo"}
    ]);
});

export default app
