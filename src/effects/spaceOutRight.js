/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.one2Zero(progress);
  let transformOrigin = '100%, 50%';
  let transform = `scale(${utils.calc(1, 0.2, progress)}) translate(${utils.calc(0, 200, progress)}%, 0%)`;

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}