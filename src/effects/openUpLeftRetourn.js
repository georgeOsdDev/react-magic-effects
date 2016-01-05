/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let transform = `rotate(${utils.calc(110, 0, progress)}deg)`;
  let animationTimingFunction = progress === 100 ?  'ease-in-out' : 'ease-out';

  return utils.prefix({
    'transform-origin': 'top left',
    'transform': transform,
    'animation-timing-function': animationTimingFunction
  });
}
