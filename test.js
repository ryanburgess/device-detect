'use strict';
var test = require('ava');
var deviceDetect = require('./');

test(function (t) {
  t.assert(deviceDetect !== undefined);
  t.end();
});