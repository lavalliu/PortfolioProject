export default function readFile() {
    const fs = require('fs');
    fs.readFile('Hello World.txt', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
}
export function writeFile() {
    const fs = require('fs');
    fs.writeFile('Bye World.txt', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Writing to the file \n");
      fs.readFile('Bye World.txt', (readErr, readData) => {
        if (err) {
          console.error(readErr);
          return;
        }
        console.log(readData);
      });
    });
}