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
  var transformOrigin = _utils2.default.calc(0, 50, progress) + '% ' + _utils2.default.calc(0, 100, progress) + '% ';
  var transform = 'perspective(800px) rotateY(' + _utils2.default.calc(0, -180, progress) + 'deg) translateZ(' + _utils2.default.calc(0, 300, progress) + 'px)';

  return _utils2.default.prefix({
    'backface-visibility': 'visible !important',
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/