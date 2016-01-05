# react-magic-effects [![Build Status](https://travis-ci.org/georgeOsdDev/react-magic-effects.svg?branch=develop)](https://travis-ci.org/georgeOsdDev/react-magic-effects) [![npm version](https://badge.fury.io/js/react-magic-effects.svg)](http://badge.fury.io/js/react-magic-effects)

Magical effects for react components
Inspired by [magic](https://github.com/miniMAC/magic).

## Demo

[View Demo](http://georgeosddev.github.io/react-magic-effects/example/)

## Installation

```bash
npm install --save react-magic-effects
```

## API

### `EffectContainer`

#### Props

```javascript
EffectContainer.propTypes = {
  effect: React.PropTypes.func, // some default effects are available from `Effects`
  duration: React.PropTypes.number, //second
  loop: React.PropTypes.bool, // animation will be looped after 60 frame * duration
  autoPlay: React.PropTypes.bool // animation will be started after `componentDidMount` and `componentDidUpdate`,
  onAnimationEnd: React.PropTypes.func // called when animation end
};
```

* `effect(progress) => {}`:

  `progress` will be passed as number(0 to 100).
  **Return object should be in css format (Not React JSX style).**

  ```
  let myEffect = (progress) => {
    let transform = `scale(${utils.one2Zero(progress)}, ${utils.one2Zero(progress)})`;

    return {
      '-webkit-transform': transform,
      'transform': transform
    };
  }
  ```

#### API

 * `play`

  Start animation.

  ```
  handlePlayButtonClick(){
    this.refs.myAnimationContainer.play();
  }
  ```

 * `stop`

   Stop animation.

   ```
   handlePauseButtonClick(){
     this.refs.myAnimationContainer.stop();
   }
   ```

 * `reset`

   Reset animation.

   ```
   onAnimationEnd(){
     this.refs.myAnimationContainer.reset();
   }
   ```


## Usage example

```javascript

import EffectContainer, {Effects} from 'react-magic-effects';

<EffectContainer ref='myAnimationContainer' effect={Effects.magic}>
  <YourComponent>
</EffectContainer>
```

See  [example](https://github.com/georgeOsdDev/react-magic-effects/tree/develop/example)

```bash
npm install
npm run start:example
```

## Tests

```bash
npm test
```


## TODOs

 * test
 * pause/resume
 * add effects
 * Update example