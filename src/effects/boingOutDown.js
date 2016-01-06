/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity, transformOrigin, transform;
  if (progress < 20){
    progress = progress*5;
    opacity = 1;
    transformOrigin = `100% 100%`;
    transform = `perspective(800px) rotateX(0deg) rotateY(${utils.calc(0, 10, progress)}deg)`;
  } else if (progress < 30){
    progress = (progress - 20)*10;
    opacity = 1;
    transformOrigin = `${utils.calc(100, 0, progress)}% 100%`;
    transform = `perspective(800px) rotateX(0deg) rotateY(${utils.calc(10, 0, progress)}deg)`;
  } else if (progress < 40) {
    progress = (progress - 30)*10;
    opacity = 1;
    transformOrigin = `0% 100%`;
    transform = `perspective(800px) rotateX(${utils.calc(0, 10, progress)}deg) rotateY(${utils.calc(0, 10, progress)}deg)`;
  } else {
    progress = (progress - 40)*1.66;
    opacity = 1;
    transformOrigin = `${utils.calc(0, 100, progress)}% 100%`;
    transform = `perspective(800px) rotateX(${utils.calc(10, 90, progress)}deg) rotateY(${utils.calc(10, 0, progress)}deg)`;
  }

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
};
