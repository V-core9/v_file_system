/*jshint esversion: 6 */
const fs = require("fs");
const dirList = (dirLoc) => {
	fs.readdir(dirLoc, (err, data) => {
		if (err) throw err;
		console.log(data);
	});
};
module.exports = dirList;
