/*jshint esversion: 8 */
const devMode = true;

const error_messenger = {
  devModeMsg: "DEV_MODE [-> error_messenger.emptyParams() \n:!!: \n",
  noInfo: "_!_Missing_Info_!_",
  emptyParams : (funcName = this.noInfo, params = this.noInfo ) => {
    //console.log(console.trace());
    var errMSG = `\n\n<ERR> ERROR::___\n     Function missing params >> <${funcName}()> || <${params}> :: path can not be empty value \n\n`; 
    if (devMode) console.log ( this.devModeMsg + errMSG + "\n");
    return errMSG;
  },
  noResultMsg : (path = this.noInfo) => {
    //console.log(console.trace());
    var errMSG = `\n\n<!> WARNING::___\n      No Results Found Using Provided PATH :: ${path} \n\n`; 
    if (devMode) console.log ( this.devModeMsg + errMSG + "\n");
    return errMSG;
  }
};

module.exports = error_messenger;
