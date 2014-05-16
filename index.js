'use strict';

'use strict';

module.exports = version;

var version = exports;

var fs = require('fs');
var node_path = require('path');

function version (cwd, callback) {
  var package_json = node_path.join(cwd, 'package.json');

  fs.readFile(package_json, function(err, content) {
    if (err) {
      return callback(version._error({
        code: 'ERROR_READ_PKG',
        message: 'fails to read "' + package_json + '", err: ' + err.stack,
        data: {
          file: package_json,
          error: err
        }
      }));
    }

    var pkg;

    try {
      pkg = JSON.parse(content.toString());

    } catch (e) {
      return callback(version._error({
        code: 'ERROR_PARSE_JSON',
        message: 'fails to parse package.json, path "' + package_json + '"',
        data: {
          file: package_json,
          error: e
        }
      }));
    }

    callback(null, pkg.version);
  });
};

version._error = function (info) {
  var err = new Error(info.message);
  err.code = info.code;
  err.data = err.data;
  return err;
};
