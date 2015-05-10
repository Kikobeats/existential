'use strict';
module.exports = function(value) {
  return typeof value !== 'undefined' && value !== null;
};
