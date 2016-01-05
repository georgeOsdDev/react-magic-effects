/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.one2Zero(progress);
  let transformOrigin = `${utils.calc(100, 200, progress)}% ${utils.calc(200, 500, progress)}% `;
  let transform = `scale(${utils.one2Zero(progress)}, ${utils.one2Zero(progress)}) rotate(${utils.calc(0, 270, progress)}deg)`;

  return utils.prefix({
    opacity: opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}
