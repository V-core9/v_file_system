const fs = require('fs').promises;
const path = require('path');

(async () =>{
  console.log( (await fs.stat(path.join(__dirname,'./byte_sizer.test.js'))) );
})();
