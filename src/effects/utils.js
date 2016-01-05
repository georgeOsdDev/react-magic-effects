'use strict';

import Prefixer from 'inline-style-prefixer'

let calc = (startValue, endValue, progress) => {
  let percent = progress/100;
  return startValue + ((endValue - startValue) * percent);
}

let zero2One = (progress) => {
  return calc(0, 1, progress);
}

let one2Zero = (progress) => {
  return 1 - progress/100;
}

const prefixer = new Prefixer();

export default {
  calc,
  zero2One,
  one2Zero,
  prefix: prefixer.prefix
};
