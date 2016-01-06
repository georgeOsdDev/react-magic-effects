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
  var transformOrigin = '50%, 50%';
  var transform = 'scale(' + _utils2.default.calc(2, 1, progress) + ', ' + _utils2.default.calc(2, 1, progress) + ')';
  var filter = 'blur(' + _utils2.default.calc(90, 0, progress) + 'px)';

  return _utils2.default.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform,
    'filter': filter
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/