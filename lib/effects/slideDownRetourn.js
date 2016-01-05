'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (progress) {
  'use strict';

  var transformOrigin = '0 0';
  var transform = 'translateY(' + _utils2.default.calc(100, 0, progress) + '%)';

  return _utils2.default.prefix({
    'transform-origin': transformOrigin,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/