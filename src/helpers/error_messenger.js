/*jshint esversion: 8 */
const devMode = true;

const error_messenger = {
  devModeMsg: "DEV_MODE [-> error_messenger.emptyParams() \n:!!: \n",
  noInfo: "_!_Missing_Info_!_",
  emptyParams : (funcName = this.noInfo, params = this.noInfo ) => {
    var errMSG = `ERROR: Function missing params >> <${funcName}()> || <${params}> :: path can not be empty value `; 
    if (devMode) console.log ( this.devModeMsg + errMSG + "\n");
    return errMSG;
  },

};

module.exports = error_messenger;
