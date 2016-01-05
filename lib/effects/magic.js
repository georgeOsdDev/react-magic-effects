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
  var transformOrigin = _utils2.default.calc(100, 200, progress) + '% ' + _utils2.default.calc(200, 500, progress) + '% ';
  var transform = 'scale(' + _utils2.default.one2Zero(progress) + ', ' + _utils2.default.one2Zero(progress) + ') rotate(' + _utils2.default.calc(0, 270, progress) + 'deg)';

  return _utils2.default.prefix({
    opacity: opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/