/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let bgColor;

  if (progress < 10){
    progress = progress * 10
    bgColor = `rgba(${utils.calc(0, 255, progress)}, 0, 0, 1)`;
  } else if (progress < 20){
    progress = (progress - 10) * 10
    bgColor = `rgba(255, ${utils.calc(0, 255, progress)}, 0, 1)`;
  } else if (progress < 30) {
    progress = (progress - 20) * 10
    bgColor = `rgba(${utils.calc(255, 0, progress)}, 255, 0, 1)`;
  } else if (progress < 40) {
    progress = (progress - 30) * 10
    bgColor = `rgba(0, 255, ${utils.calc(0, 255, progress)}, 1)`;
  } else if (progress < 50) {
    progress = (progress - 40) * 10
    bgColor = `rgba(0, ${utils.calc(255, 0, progress)}, 255, 1)`;
  } else if (progress < 60) {
    progress = (progress - 50) * 10
    bgColor = `rgba(${utils.calc(0, 255, progress)}, 0, 255, 1)`;
  } else {
    progress = (progress - 60) * 10
    bgColor = `rgba(255, 0, ${utils.calc(255, 0, progress)}, 1)`;
  }

  return utils.prefix({
    'background-color': bgColor,
    'transition': 'background-color'
  });
};
