/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.zero2One(progress);
  let transformOrigin = '50% 50%';
  let transform = `scale(${utils.calc(2, 1, progress)}, ${utils.calc(2, 1, progress)})`;
  let filter = `blur(${utils.calc(2, 0, progress)}px)`;

  return utils.prefix({
    opacity: opacity,
    'transform-origin': transformOrigin,
    'transform': transform,
    'filter': filter
  });
}
