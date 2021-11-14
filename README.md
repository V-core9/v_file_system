# 🔽 v_fs 
> **[.v.]** *Node Module* File System Handler

## ➿ How To Install  

Add this repo git URL into dependencies in your projects package.json.  

    ...
    "dependencies": {
      "v_fs":"https://github.com/V-core9/v_fs.git"  
    },
    ...

## 🎮 How to use  

Well just load it as a constant...

  const v_fs = require('v_fs');

  // Make Directory - ASYNC [ *path is only required for it to work || defaults >> callback = null & options = {} ]
  v_fs.mkdir(path, options, callback) ;

  // Check git status - ASYNC [ *filePath & *content are required || defaults >> callback = null & encoding = 'utf8' ]
  v_fs.write(filePath, content, callback, encoding) ;

...

### 👻 Author: **-<[\_.⟁.\_]>-**  

### ⏰ CreatedTime: 11.08.2021 @ 21:51  
