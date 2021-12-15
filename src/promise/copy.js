const fs = require('fs').promises;

copy = async (origin,  destination) => {
  try {
    await fs.copyFile( origin, destination);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = copy;
