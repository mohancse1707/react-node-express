/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

const fs = require('fs');
const path = require('path');

const _root = path.resolve(__dirname, '..');

module.exports = {
  root,
  isExternalLib
};

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

function isExternalLib(module, check = /node_modules/) {
  const req = module.userRequest;
  if (typeof req !== 'string') {
    return false;
  }
  return req.search(check) >= 0;
}

const parseString = require('xml2js').parseString;
// return the version number from `pom.xml` file
function parseVersion() {
  let version = null;
  const pomXml = fs.readFileSync('pom.xml', 'utf8');
  parseString(pomXml, (err, result) => {
    if (result.project.version && result.project.version[0]) {
      version = result.project.version[0];
    } else if (result.project.parent && result.project.parent[0] && result.project.parent[0].version && result.project.parent[0].version[0]) {
      version = result.project.parent[0].version[0];
    }
  });
  if (version === null) {
    throw new Error('pom.xml is malformed. No version is defined');
  }
  return version;
}
