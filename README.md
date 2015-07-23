[![NPM version](https://badge.fury.io/js/package-version.svg)](http://badge.fury.io/js/package-version)
[![Build Status](https://travis-ci.org/kaelzhang/node-package-version.svg?branch=master)](https://travis-ci.org/kaelzhang/node-package-version)
[![Dependency Status](https://gemnasium.com/kaelzhang/node-package-version.svg)](https://gemnasium.com/kaelzhang/node-package-version)

# package-version

Get the version of a package from package.json

## Installation

```bash
npm install package-version --save
```

## version(cwd, callback);

```js
var version = require('package-version');
version('/path/to', function(err, version){
  if(err){
    console.log('error:', err.stack);
    return;
  }
  console.log('version:', version);
});
```

- cwd `path` the directory of the package
- callback `function(err, version)`
    - err `Error`
    - version [`semver`](http://www.npmjs.org/package/semver)
