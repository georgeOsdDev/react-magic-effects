'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (progress) {
  'use strict';

  var transform = 'scale(' + _utils2.default.one2Zero(progress) + ', ' + _utils2.default.one2Zero(progress) + ')';

  return _utils2.default.prefix({
    'transform': transform
  });
};