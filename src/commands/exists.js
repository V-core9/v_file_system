/*jshint esversion: 8 */
const {Command, flags} = require('@oclif/command');
const vExists = require('../v_exists');

class ExistsCommand extends Command {
  async run() {
    const {flags} = this.parse(ExistsCommand);
    const path = flags.path || null;

    if ( path === null ) {
      console.log('ERROR: --path flag empty value provided');
      return false;
    } else {
      const result = vExists(path);
      console.log(result);
      return result;
    }
  }
}

ExistsCommand.description = `Describe the command here
...
Extra documentation goes here
`

ExistsCommand.flags = {
  path: flags.string({char: 'p', description: 'path to check existence'}),
}

module.exports = ExistsCommand ;
