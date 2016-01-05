'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _magic = require('./magic');

var _magic2 = _interopRequireDefault(_magic);

var _openDownLeft = require('./openDownLeft');

var _openDownLeft2 = _interopRequireDefault(_openDownLeft);

var _puffIn = require('./puffIn');

var _puffIn2 = _interopRequireDefault(_puffIn);

var _scaleIn = require('./scaleIn');

var _scaleIn2 = _interopRequireDefault(_scaleIn);

var _scaleOut = require('./scaleOut');

var _scaleOut2 = _interopRequireDefault(_scaleOut);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  magic: _magic2.default,
  openDownLeft: _openDownLeft2.default,
  puffIn: _puffIn2.default,
  scaleIn: _scaleIn2.default,
  scaleOut: _scaleOut2.default,

  utils: _utils2.default
};