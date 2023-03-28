const path = require('path');
const fs = require('fs');
const os = require('os')

module.exports = {
  // ...
  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false
    }
  }
};