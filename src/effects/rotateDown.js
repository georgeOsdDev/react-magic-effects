/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.one2Zero(progress);
  let transformOrigin = `${utils.calc(0, 50, progress)}% ${utils.calc(0, 100, progress)}% `;
  let transform = `perspective(800px) rotateX(${utils.calc(0, -180, progress)}deg) translateZ(${utils.calc(0, 300, progress)}px)`;

  return utils.prefix({
    'backface-visibility': 'visible !important',
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}
