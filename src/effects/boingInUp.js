/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity, transformOrigin, transform;
  if (progress < 50){
    progress = progress*2;
    opacity = utils.zero2One(progress);
    transformOrigin = `50% 0%`;
    transform = `perspective(800px) rotateX(${utils.calc(-90, 50, progress)}deg)`;
  } else {
    progress = (progress - 50)*2;
    opacity = 1;
    transformOrigin = `50% 0%`;
    transform = `perspective(800px) rotateX(${utils.calc(50, 0, progress)}deg)`;
  }

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
};
