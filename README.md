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

    ...
    
    const v_fs = require('v_fs');

    console.log(v_fs.version());

    // ASYNC LIST - - - -
    // Make Directory 
    v_fs.mkdir(path, options = {}, callback = null) ;

    // Write Content To File
    v_fs.write(filePath, content,  callback = null, encoding = 'utf8') ;
    
    // SYNC LIST - - - -
    // Make Directory
    v_fs.sync.mkdir(path, recurse = false) ;

    // Write Content To File
    v_fs.sync.write(filePath, content, encoding = 'utf8') ;
    
    ...

## ✅ Test Results and Coverage with Jest

![Test and Coverage with Jest](v_fs_test.png)

---

## 🩺 Sync[vs]Async Write&Delete Speed

| FileCount      | sw | aw | sw/aw | sd | ad | sd/ad |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| 2,000      | 1.325s       | 0.068s       | **19.4x**       | 0.954s       | 0.033s       | **28.9x**       |
| 15,000   | 9.904s        | 0.316s       | **31.3x**       | 7.430s       | 0.208s       | **35.7x**       |
| 50,000   | 33.807s        | 0.861s       | **39.2x**       | 22.318s       | 0.765s       | **29.1x**       |

[ sw / aw - Divide SyncWrite with AsyncWrite   ]
[ sd / ad  - Divide SyncDelete with AsyncDelete ]

---

### 👻 Author: **-<[\_.⟁.\_]>-**  

### ⏰ CreatedTime: 11.08.2021 @ 21:51  
