import { createServer } from "node:http";
import sayHello from "./hello.mjs";

let salutanome = sayHello("Francooo")

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    `<html><body><h1>${salutanome}</h1></body></html>`
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
