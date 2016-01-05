import utils from './utils';

export default (progress) => {
  'use strict';
  let transform = `scale(${utils.zero2One(progress)}, ${utils.zero2One(progress)})`;

  return utils.prefix({
    'transform': transform
  });
}

