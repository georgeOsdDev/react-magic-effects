/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.one2Zero(progress);
  let transformOrigin = `50% 50%`;
  let transform = `scale(${utils.one2Zero(progress)}, ${utils.one2Zero(progress)}) rotateY(${utils.calc(0, 180, progress)}deg)`;

  return utils.prefix({
    opacity: opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}
