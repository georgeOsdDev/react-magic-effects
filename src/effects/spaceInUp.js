/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.zero2One(progress);
  let transformOrigin = '50%, 0%';
  let transform = `scale(${utils.calc(0.2, 1, progress)}) translate(0%, ${utils.calc(-200, 0, progress)}%)`;

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}