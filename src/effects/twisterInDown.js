/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.zero2One(progress);

  let transformOrigin, transform;
  if (progress < 30){
    transformOrigin = '0 100%';
    transform = `scale(0, 0) rotate(360deg) translateY(100%)`;
  } else {
    transformOrigin = `${utils.calc(0, 100, progress)}%, 100%`;
    transform = `scale(${utils.zero2One(progress)}, ${utils.zero2One(progress)}) rotate(${utils.calc(360, 0, progress)}deg) translateY(${utils.calc(-100, 0, progress)}%)`;
  }

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}
