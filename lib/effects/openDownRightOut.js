'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (progress) {
  'use strict';

  var opacity = _utils2.default.one2Zero(progress);
  var transform = 'rotate(' + _utils2.default.calc(0, 110, progress) + 'deg)';
  var animationTimingFunction = progress === 100 ? 'ease-out' : 'ease-in-out';

  return _utils2.default.prefix({
    'opacity': opacity,
    'transform-origin': 'bottom right',
    'transform': transform,
    'animation-timing-function': animationTimingFunction
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/