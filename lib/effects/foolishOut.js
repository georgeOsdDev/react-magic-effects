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
    transformOrigin = _utils2.default.calc(50, 0, progress) + '%, ' + _utils2.default.calc(50, 0, progress) + '%';
    transform = 'scale(' + _utils2.default.calc(1, 0.5, progress) + ', ' + _utils2.default.calc(1, 0.5, progress) + ') rotate(' + _utils2.default.calc(360, 0, progress) + 'deg)';
  } else if (progress < 40) {
    progress = (progress - 20) * 5;
    opacity = 1;
    transformOrigin = _utils2.default.calc(0, 100, progress) + '%, 0%';
    transform = 'scale(0.5, 0.5) rotate(0deg)';
  } else if (progress < 60) {
    progress = (progress - 40) * 5;
    opacity = 1;
    transformOrigin = _utils2.default.calc(100, 0, progress) + '%';
    transform = 'scale(0.5, 0.5) rotate(0deg)';
  } else if (progress < 80) {
    progress = (progress - 60) * 5;
    opacity = 1;
    transformOrigin = '0% ' + _utils2.default.calc(100, 0, progress) + '%';
    transform = 'scale(0.5, 0.5) rotate(0deg)';
  } else {
    opacity = _utils2.default.one2Zero(progress);
    transformOrigin = _utils2.default.calc(0, 50, progress) + '%, ' + _utils2.default.calc(100, 50, progress) + '%';
    transform = 'scale(' + _utils2.default.calc(0.5, 0, progress) + ', ' + _utils2.default.calc(0.5, 0, progress) + ') rotate(0deg)';
  }

  return _utils2.default.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/