/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity, transformOrigin, transform;
  if (progress < 20){
    progress = progress*5;
    transformOrigin = `${utils.calc(50, 0, progress)}%, ${utils.calc(50, 0, progress)}%`;
    transform = `scale(${utils.calc(1, 0.5, progress)}, ${utils.calc(1, 0.5, progress)}) rotate(${utils.calc(360, 0, progress)}deg)`;
  } else if (progress < 40){
    progress = (progress - 20)*5;
    opacity = 1;
    transformOrigin = `${utils.calc(0, 100, progress)}%, 0%`;
    transform = 'scale(0.5, 0.5) rotate(0deg)';
  } else if (progress < 60) {
    progress = (progress - 40)*5;
    opacity = 1;
    transformOrigin = `${utils.calc(100, 0, progress)}%`;
    transform = 'scale(0.5, 0.5) rotate(0deg)';
  } else if (progress < 80) {
    progress = (progress - 60)*5;
    opacity = 1;
    transformOrigin = `0% ${utils.calc(100, 0, progress)}%`;
    transform = 'scale(0.5, 0.5) rotate(0deg)';
  } else {
    opacity = utils.one2Zero(progress);
    transformOrigin = `${utils.calc(0, 50, progress)}%, ${utils.calc(100, 50, progress)}%`;
    transform = `scale(${utils.calc(0.5, 0, progress)}, ${utils.calc(0.5, 0, progress)}) rotate(0deg)`;
  }

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
};
