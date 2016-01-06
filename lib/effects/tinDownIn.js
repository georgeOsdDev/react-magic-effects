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
  if (progress < 50) {
    progress = progress * 2;
    opacity = _utils2.default.zero2One(progress);
    transform = 'scale(' + _utils2.default.calc(1, 1.1, progress) + ', ' + _utils2.default.calc(1, 1.1, progress) + ') translateY(' + _utils2.default.calc(900, 0, progress) + '%)';
  } else if (progress < 60) {
    progress = (progress - 50) * 10;
    opacity = 1;
    transform = 'scale(' + _utils2.default.calc(1.1, 1, progress) + ', ' + _utils2.default.calc(1.1, 1, progress) + ') translateY(0)';
  } else if (progress < 70) {
    progress = (progress - 60) * 10;
    opacity = 1;
    transform = 'scale(' + _utils2.default.calc(1, 1.1, progress) + ', ' + _utils2.default.calc(1, 1.1, progress) + ') translateY(0)';
  } else if (progress < 80) {
    progress = (progress - 70) * 10;
    opacity = 1;
    transform = 'scale(' + _utils2.default.calc(1.1, 1, progress) + ', ' + _utils2.default.calc(1.1, 1, progress) + ') translateY(0)';
  } else if (progress < 90) {
    progress = (progress - 80) * 10;
    opacity = 1;
    transform = 'scale(' + _utils2.default.calc(1, 1.1, progress) + ', ' + _utils2.default.calc(1, 1.1, progress) + ') translateY(0)';
  } else {
    progress = (progress - 90) * 10;
    opacity = 1;
    transform = 'scale(' + _utils2.default.calc(1.1, 1, progress) + ', ' + _utils2.default.calc(1.1, 1, progress) + ') translateY(0)';
  }

  return _utils2.default.prefix({
    'opacity': opacity,
    'transform': transform
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/