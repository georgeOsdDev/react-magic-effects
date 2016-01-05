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
  var transformOrigin = undefined,
      transform = undefined;
  if (progress < 30) {
    transformOrigin = '100% 0';
    transform = 'scale(0, 0) rotate(360deg) translateY(100%)';
  } else {
    transformOrigin = _utils2.default.calc(100, 0, progress) + '%, 100%';
    transform = 'scale(' + _utils2.default.zero2One(progress) + ', ' + _utils2.default.zero2One(progress) + ') rotate(' + _utils2.default.calc(360, 0, progress) + 'deg) translateY(' + _utils2.default.calc(100, 0, progress) + '%)';
  }

  return _utils2.default.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/