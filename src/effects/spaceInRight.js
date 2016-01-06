/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.zero2One(progress);
  let transformOrigin = '100%, 50%';
  let transform = `scale(${utils.calc(0.2, 1, progress)}) translate(${utils.calc(200, 0, progress)}%, 0%)`;

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}