/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let transform = `perspective(800px) rotateX(${utils.calc(-180, 0, progress)}deg)`;

  return utils.prefix({
    'backface-visibility': 'visible !important',
    'transform-origin': '0 100%',
    'transform': transform
  });
}
