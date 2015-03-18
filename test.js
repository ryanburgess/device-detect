'use strict';
var test = require('ava');
var deviceDetect = require('./');

test(function (t) {
  t.assert(deviceDetect.device.length > 0);
  t.assert(deviceDetect.browser.length > 0);
  t.end();
});