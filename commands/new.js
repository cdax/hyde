var path = require('path');

var Promise = require('bluebird');
var mkdirp = Promise.promisify(require('mkdirp'));
var ncp = Promise.promisify(require('ncp'));

var SEED_DIR = path.resolve('./seed');

var generate = function (rootDir) {
  rootDir = path.resolve(rootDir);
  mkdirp(rootDir)
    .then(function () {
      return ncp(SEED_DIR, rootDir);
    })
    .then(function () {
      console.log('New site created at ' + path.normalize(rootDir));
    })
    .error(function (err) {
      console.log(err);
    });
};

module.exports = generate;
