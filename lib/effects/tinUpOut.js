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
      transform = undefined;
  if (progress < 10) {
    progress = progress * 10;
    opacity = 1;
    transform = 'scale(' + _utils2.default.calc(1, 1.1, progress) + ', ' + _utils2.default.calc(1, 1.1, progress) + ') translateY(0)';
  } else if (progress < 20) {
    progress = (progress - 10) * 10;
    opacity = 1;
    transform = 'scale(' + _utils2.default.calc(1.1, 1, progress) + ', ' + _utils2.default.calc(1.1, 1, progress) + ') translateY(0)';
  } else if (progress < 30) {
    progress = (progress - 20) * 10;
    opacity = 1;
    transform = 'scale(' + _utils2.default.calc(1, 1.1, progress) + ', ' + _utils2.default.calc(1, 1.1, progress) + ') translateY(0)';
  } else if (progress < 40) {
    progress = (progress - 30) * 10;
    opacity = 1;
    transform = 'scale(' + _utils2.default.calc(1.1, 1, progress) + ', ' + _utils2.default.calc(1.1, 1, progress) + ') translateY(0)';
  } else if (progress < 50) {
    progress = (progress - 40) * 10;
    opacity = 1;
    transform = 'scale(' + _utils2.default.calc(1, 1.1, progress) + ', ' + _utils2.default.calc(1, 1.1, progress) + ') translateY(0)';
  } else {
    progress = (progress - 50) * 2;
    opacity = _utils2.default.one2Zero(progress);
    transform = 'scale(1, 1) translateY(' + _utils2.default.calc(0, -900, progress) + '%)';
  }

  return _utils2.default.prefix({
    'opacity': opacity,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/