
down = (size) => {
  return size * 1024;
};

up = (size) => {
  return size / 1024;
};

const byteSizer = {
  byteToKilo(size) {
    return up(size);
  },
  byteToMega(size) {
    return up(this.byteToKilo(size));
  },
  byteToGiga(size) {
    return up(this.byteToMega(size));
  },
  byteToTera(size) {
    return up(this.byteToGiga(size));
  },


  kiloToByte(size) {
    return down(size);
  },
  kiloToMega(size) {
    return up(size);
  },
  kiloToGiga(size) {
    return up(this.kiloToMega(size));
  },
  kiloToTera(size) {
    return up(this.kiloToGiga(size));
  },


  megaToByte(size) {
    return down(this.megaToKilo(size));
  },
  megaToKilo(size) {
    return down(size);
  },
  megaToGiga(size) {
    return up(size);
  },
  megaToTera(size) {
    return up(this.megaToGiga(size));
  },

  gigaToByte(size) {
    return down(this.gigaToKilo(size));
  },  
  gigaToKilo(size) {
    return down(this.gigaToMega(size));
  },
  gigaToMega(size) {
    return down(size);
  },
  gigaToTera(size) {
    return up(size);
  },

  teraToByte(size) {
    return down(this.teraToKilo(size));
  },  
  teraToKilo(size) {
    return down(this.teraToMega(size));
  },
  teraToMega(size) {
    return down(this.teraToGiga(size));
  },
  teraToGiga(size) {
    return down(size);
  },



};

module.exports = byteSizer;
