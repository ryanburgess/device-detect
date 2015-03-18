'use strict';
var test = require('tape');
var deviceDetect = require('./');

test('check deviceDetect exists', function (t) {
  t.assert(deviceDetect !== undefined);
  t.end();
});