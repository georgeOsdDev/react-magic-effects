'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (progress) {
  'use strict';

  var opacity = _utils2.default.zero2One(progress);
  var transformOrigin = '100%, 50%';
  var transform = 'scale(' + _utils2.default.calc(0.2, 1, progress) + ') translate(' + _utils2.default.calc(200, 0, progress) + '%, 0%)';

  return _utils2.default.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/