const fs = require('fs');
let count = 0;
const content = fs.readFileSync('../hello-world/hello-world.js').toString();
count = content.split('\n').length -1;
console.log(count);