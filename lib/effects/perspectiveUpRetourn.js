'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (progress) {
  'use strict';

  var transform = 'perspective(800px) rotateX(' + _utils2.default.calc(180, 0, progress) + 'deg)';

  return _utils2.default.prefix({
    'backface-visibility': 'visible !important',
    'transform-origin': '0 0',
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/