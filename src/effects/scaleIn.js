import utils from './utils';

export default (progress) => {
  'use strict';
  let transform = `scale(${utils.one2Zero(progress)}, ${utils.one2Zero(progress)})`;

  return utils.prefix({
    'transform': transform
  });
}

