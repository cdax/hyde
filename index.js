var pkgInfo = require('./package.json');
var cli = require('commander');

var cmds = {
  new: require('./commands/new.js')
};

cli.version(pkgInfo.version);

cli
  .command('new [dir]')
  .description('initializes a new blog under `dir`')
  .action(function (dir) {
    cmds.new(dir || process.env.PWD);
  });

cli.parse(process.argv);
