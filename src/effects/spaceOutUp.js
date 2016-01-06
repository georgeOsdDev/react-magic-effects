/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.one2Zero(progress);
  let transformOrigin = '50%, 0%';
  let transform = `scale(${utils.calc(1, 0.2, progress)}) translate(0%, ${utils.calc(0, -200, progress)}%)`;

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}