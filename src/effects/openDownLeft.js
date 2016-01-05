/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let transform = `rotate(${utils.calc(0, -110, progress)}deg)`;

  return utils.prefix({
    'transform-origin': 'bottom left',
    'transform': transform,
    'animation-timing-function': 'ease-out'
  });
}
