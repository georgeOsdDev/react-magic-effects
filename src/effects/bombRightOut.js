/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity, transformOrigin, transform, filter;
  if (progress < 50){
    progress = progress*2;
    opacity = 1;
    transformOrigin = `${utils.calc(50, 200, progress)}% 50%`;
    transform = `rotate(${utils.calc(0, 160, progress)}deg)`;
    filter = `blur(0px)`;
  } else {
    progress = (progress - 50)*2;
    opacity = utils.one2Zero(progress);
    transformOrigin = `200% 50%`;
    transform = `rotate(160deg)`;
    filter = `blur(${utils.calc(0, 20, progress)}px)`;
  }

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
};
