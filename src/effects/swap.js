/**
Inspired by https://github.com/miniMAC/magic/blob/master/magic.css
**/
import utils from './utils';

export default (progress) => {
  'use strict';
  let opacity = utils.zero2One(progress);
  let transformOrigin = `${utils.calc(0, 100, progress)}%, 100%`;
  let transform = `scale(${utils.zero2One(progress)}, ${utils.zero2One(progress)}) translate(${utils.calc(-700, 0, progress)}%, 0px)`;

  return utils.prefix({
    'opacity': opacity,
    'transform-origin': transformOrigin,
    'transform': transform
  });
}
