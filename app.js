const { createServer } = require("node:http");

function createApp() {

    return createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-type', "text/html");
        const jsonResponseBody = JSON.stringify({location:"mars"});
        const jsonResponseText = "Welcome to the World Wide Web!"
        response.end(jsonResponseText)
    });
}

module.exports = createApp;