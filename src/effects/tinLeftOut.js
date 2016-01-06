/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity, transform;
  if (progress < 10){
    progress = progress*10;
    opacity = 1;
    transform = `scale(${utils.calc(1, 1.1, progress)}, ${utils.calc(1, 1.1, progress)}) translateX(0)`;
  } else if (progress < 20){
    progress = (progress - 10)*10;
    opacity = 1;
    transform = `scale(${utils.calc(1.1, 1, progress)}, ${utils.calc(1.1, 1, progress)}) translateX(0)`;
  } else if (progress < 30){
    progress = (progress - 20)*10;
    opacity = 1;
    transform = `scale(${utils.calc(1, 1.1, progress)}, ${utils.calc(1, 1.1, progress)}) translateX(0)`;
  } else if (progress < 40){
    progress = (progress - 30)*10;
    opacity = 1;
    transform = `scale(${utils.calc(1.1, 1, progress)}, ${utils.calc(1.1, 1, progress)}) translateX(0)`;
  } else if (progress < 50){
    progress = (progress - 40)*10;
    opacity = 1;
    transform = `scale(${utils.calc(1, 1.1, progress)}, ${utils.calc(1, 1.1, progress)}) translateX(0)`;
  } else {
    progress = (progress - 50)*2;
    opacity = utils.one2Zero(progress);
    transform = `scale(1, 1) translateX(${utils.calc(0, -900, progress)}%)`;
  }

  return utils.prefix({
    'opacity': opacity,
    'transform': transform
  });
};
