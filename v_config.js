
const v_config = {
  $_mode : "dev",
  isDev() {
    return ( this.$_mode === "development" || this.$_mode === "dev") ? true : false;
  }
};


module.exports = v_config;
