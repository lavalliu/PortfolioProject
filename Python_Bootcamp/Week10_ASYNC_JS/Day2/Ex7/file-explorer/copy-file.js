const fs = require('fs')
const text = fs.readFile(source.txt)

fs.writeFile(destination.txt, text)