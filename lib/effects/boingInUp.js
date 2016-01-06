'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (progress) {
  'use strict';

  var opacity = undefined,
      transformOrigin = undefined,
      transform = undefined;
  if (progress < 50) {
    progress = progress * 2;
    opacity = _utils2.default.zero2One(progress);
    transformOrigin = '50% 0%';
    transform = 'perspective(800px) rotateX(' + _utils2.default.calc(-90, 50, progress) + 'deg)';
  } else {
    progress = (progress - 50) * 2;
    opacity = 1;
    transformOrigin = '50% 0%';
    transform = 'perspective(800px) rotateX(' + _utils2.default.calc(50, 0, progress) + 'deg)';
  }

  return _utils2.default.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/