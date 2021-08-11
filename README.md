# 🔽 V_CLI :: **dirList(** <\_dir\_to\_list\_> **)**
> **[.v.]** *Node Module* Directory listing using readdir() from fs module.

#
## ➿ How To Install:
Add this repo git URL into dependencies in your projects package.json.  

	...
	"dependencies": {
		"v_dir_list":"https://github.com/V-tech-tools/v_dir_list"  
	}, 
	...

## 🎮 How to use:
Well just load it as a constant... Give it some dir to list and get an array of items in it.   

	const dirList = require('v_dir_list');

	// Simple listing
	dirList(".");

	// Check git status
	dirList("..");

	...



### 👻 Author: **-<[\_.⟁.\_]>-**   
### ⏰ CreatedTime: 11.08.2021 @ 21:51