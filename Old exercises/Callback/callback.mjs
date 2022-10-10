import { writeFile } from "node:fs";

writeFile('message.txt', "Esercizio node", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });