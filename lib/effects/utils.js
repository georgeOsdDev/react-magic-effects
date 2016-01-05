'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calc = function calc(startValue, endValue, progress) {
  var percent = progress / 100;
  return startValue + (endValue - startValue) * percent;
};

var zero2One = function zero2One(progress) {
  return calc(0, 1, progress);
};

var one2Zero = function one2Zero(progress) {
  return 1 - progress / 100;
};

var prefixer = new _inlineStylePrefixer2.default();

exports.default = {
  calc: calc,
  zero2One: zero2One,
  one2Zero: one2Zero,
  prefix: prefixer.prefix
};