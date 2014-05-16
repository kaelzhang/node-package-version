'use strict';

var expect = require('chai').expect;
var version = require('../');
var node_path = require('path');

var root = node_path.join(__dirname, 'fixtures');

describe("version(cwd, callback)", function(){
  it("normal", function(done){
    version( node_path.join(root, 'normal'), function (err, version) {
      expect(err).to.equal(null);
      expect(version).to.equal('1.0.0');
      done();
    });
  });

  it("error not found", function(done){
    version( node_path.join(root, 'not-found'), function (err, version) {
      expect(err).not.to.equal(null);
      expect(err.code).to.equal('ERROR_READ_PKG');
      done();
    });
  });

  it("incorrect package.json", function(done){
    version( node_path.join(root, 'wrong-json'), function (err, version) {
      expect(err).not.to.equal(null);
      expect(err.code).to.equal('ERROR_PARSE_JSON');
      done();
    });
  });
});

