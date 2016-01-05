/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.zero2One(progress);
  let transformOrigin = '50%, 50%';
  let transform = `scale(${utils.zero2One(progress)}, ${utils.zero2One(progress)})`;

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}
