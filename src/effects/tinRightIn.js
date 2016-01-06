/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity, transform;
  if (progress < 50){
    progress = progress * 2;
    opacity = utils.zero2One(progress);
    transform = `scale(${utils.calc(1, 1.1, progress)}, ${utils.calc(1, 1.1, progress)}) translateX(${utils.calc(900, 0, progress)}%)`;
  } else if (progress < 60){
    progress = (progress - 50)*10;
    opacity = 1;
    transform = `scale(${utils.calc(1.1, 1, progress)}, ${utils.calc(1.1, 1, progress)}) translateX(0)`;
  } else if (progress < 70){
    progress = (progress - 60)*10;
    opacity = 1;
    transform = `scale(${utils.calc(1, 1.1, progress)}, ${utils.calc(1, 1.1, progress)}) translateX(0)`;
  } else if (progress < 80){
    progress = (progress - 70)*10;
    opacity = 1;
    transform = `scale(${utils.calc(1.1, 1, progress)}, ${utils.calc(1.1, 1, progress)}) translateX(0)`;
  } else if (progress < 90){
    progress = (progress - 80)*10;
    opacity = 1;
    transform = `scale(${utils.calc(1, 1.1, progress)}, ${utils.calc(1, 1.1, progress)}) translateX(0)`;
  } else {
    progress = (progress - 90)*10;
    opacity = 1;
    transform = `scale(${utils.calc(1.1, 1, progress)}, ${utils.calc(1.1, 1, progress)}) translateX(0)`;
  }

  return utils.prefix({
    'opacity': opacity,
    'transform': transform
  });
};
