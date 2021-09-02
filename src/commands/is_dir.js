/*jshint esversion: 8 */
const {Command, flags} = require('@oclif/command');
const vIsDir = require('../v_is_dir');

class IsDirCommand extends Command {
  async run() {
    const {flags} = this.parse(IsDirCommand);
    const path = flags.path || null;

    if ( path === null ) {
      console.log('ERROR: --path flag empty value provided');
      return false;
    } else {
      const result = vIsDir(path);
      console.log(result);
      return result;
    }
  }
}

IsDirCommand.description = `Will check if PATH is DIR
...
Extra documentation goes here
`

IsDirCommand.flags = {
  path: flags.string({char: 'p', description: 'path to check if is DIR'}),
}

module.exports = IsDirCommand ;
