# 🔽 v_f 
[![njsscan sarif](https://github.com/V-core9/v_f/actions/workflows/njsscan-analysis.yml/badge.svg)](https://github.com/V-core9/v_f/actions/workflows/njsscan-analysis.yml) [![OSSAR](https://github.com/V-core9/v_f/actions/workflows/ossar-analysis.yml/badge.svg)](https://github.com/V-core9/v_f/actions/workflows/ossar-analysis.yml)
> **[.v.]** *Node Module* File System Handler

## ➿ How To Install  

Add this repo git URL into dependencies in your projects package.json.  

    ...
    "dependencies": {
      "v_f":"https://github.com/V-core9/v_f.git"  
    },
    ...

## 🎮 How to use  

Well just load it as a constant...

    ...
    
    const v_f = require('v_f');

    // ASYNC  - - - -
    
    v_f.promise.mkdir(path, options = {}, callback = null) ;

    v_f.promise.write(filePath, content,  callback = null, encoding = 'utf8') ;
    
    // SYNC  - - - -
    
    v_f.sync.mkdir(path, recurse = false) ;

    v_f.sync.write(filePath, content, encoding = 'utf8') ;
    
    ...

## ✅ Test Results and Coverage with Jest

![Test and Coverage with Jest](v_f_test.png)

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
