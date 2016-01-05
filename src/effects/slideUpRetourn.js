/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let transformOrigin = '0 0';
  let transform = `translateY(${utils.calc(-100, 0, progress)}%)`;

  return utils.prefix({
    'transform-origin': transformOrigin,
    'transform': transform
  });
}
