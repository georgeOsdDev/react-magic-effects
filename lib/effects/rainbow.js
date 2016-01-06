'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (progress) {
  'use strict';

  var bgColor = undefined;

  if (progress < 10) {
    progress = progress * 10;
    bgColor = 'rgba(' + _utils2.default.calc(0, 255, progress) + ', 0, 0, 1)';
  } else if (progress < 20) {
    progress = (progress - 10) * 10;
    bgColor = 'rgba(255, ' + _utils2.default.calc(0, 255, progress) + ', 0, 1)';
  } else if (progress < 30) {
    progress = (progress - 20) * 10;
    bgColor = 'rgba(' + _utils2.default.calc(255, 0, progress) + ', 255, 0, 1)';
  } else if (progress < 40) {
    progress = (progress - 30) * 10;
    bgColor = 'rgba(0, 255, ' + _utils2.default.calc(0, 255, progress) + ', 1)';
  } else if (progress < 50) {
    progress = (progress - 40) * 10;
    bgColor = 'rgba(0, ' + _utils2.default.calc(255, 0, progress) + ', 255, 1)';
  } else if (progress < 60) {
    progress = (progress - 50) * 10;
    bgColor = 'rgba(' + _utils2.default.calc(0, 255, progress) + ', 0, 255, 1)';
  } else {
    progress = (progress - 60) * 10;
    bgColor = 'rgba(255, 0, ' + _utils2.default.calc(255, 0, progress) + ', 1)';
  }

  return _utils2.default.prefix({
    'background-color': bgColor,
    'transition': 'background-color'
  });
}; /**
   Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
   **/