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
      transform = undefined,
      filter = undefined;
  if (progress < 50) {
    progress = progress * 2;
    opacity = 1;
    transformOrigin = _utils2.default.calc(50, 200, progress) + '% 50%';
    transform = 'rotate(' + _utils2.default.calc(0, 160, progress) + 'deg)';
    filter = 'blur(0px)';
  } else {
    progress = (progress - 50) * 2;
    opacity = _utils2.default.one2Zero(progress);
    transformOrigin = '200% 50%';
    transform = 'rotate(160deg)';
    filter = 'blur(' + _utils2.default.calc(0, 20, progress) + 'px)';
  }

  return _utils2.default.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/