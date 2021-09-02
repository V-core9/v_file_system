const {Command, flags} = require('@oclif/command')

class ExistsCommand extends Command {
  async run() {
    const {flags} = this.parse(ExistsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\_V_\\v_fs\\src\\commands\\exists.js`)
  }
}

ExistsCommand.description = `Describe the command here
...
Extra documentation goes here
`

ExistsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ExistsCommand
