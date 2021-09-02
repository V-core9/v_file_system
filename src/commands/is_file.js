/*jshint esversion: 8 */
const {Command, flags} = require('@oclif/command');
const vIsFile = require('../v_is_file');

class IsFileCommand extends Command {
  async run() {
    const {flags} = this.parse(IsFileCommand);
    const path = flags.path || null;

    if ( path === null ) {
      console.log('ERROR: --path flag empty value provided');
      return false;
    } else {
      const result = vIsFile(path);
      console.log(result);
      return result;
    }
  }
}

IsFileCommand.description = `Describe the command here
...
Extra documentation goes here
`

IsFileCommand.flags = {
  path: flags.string({char: 'p', description: 'path to check if is FILE'}),
};

module.exports = IsFileCommand ;
