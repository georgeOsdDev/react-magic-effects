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
  if (progress < 20) {
    progress = progress * 5;
    opacity = 1;
    transformOrigin = '100% 100%';
    transform = 'perspective(800px) rotateX(0deg) rotateY(' + _utils2.default.calc(0, 10, progress) + 'deg)';
  } else if (progress < 30) {
    progress = (progress - 20) * 10;
    opacity = 1;
    transformOrigin = _utils2.default.calc(100, 0, progress) + '% 100%';
    transform = 'perspective(800px) rotateX(0deg) rotateY(' + _utils2.default.calc(10, 0, progress) + 'deg)';
  } else if (progress < 40) {
    progress = (progress - 30) * 10;
    opacity = 1;
    transformOrigin = '0% 100%';
    transform = 'perspective(800px) rotateX(' + _utils2.default.calc(0, 10, progress) + 'deg) rotateY(' + _utils2.default.calc(0, 10, progress) + 'deg)';
  } else {
    progress = (progress - 40) * 1.66;
    opacity = 1;
    transformOrigin = _utils2.default.calc(0, 100, progress) + '% 100%';
    transform = 'perspective(800px) rotateX(' + _utils2.default.calc(10, 90, progress) + 'deg) rotateY(' + _utils2.default.calc(10, 0, progress) + 'deg)';
  }

  return _utils2.default.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/