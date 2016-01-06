# react-magic-effects [![Build Status](https://travis-ci.org/georgeOsdDev/react-magic-effects.svg?branch=develop)](https://travis-ci.org/georgeOsdDev/react-magic-effects) [![npm version](https://badge.fury.io/js/react-magic-effects.svg)](http://badge.fury.io/js/react-magic-effects)

Magical effects for react components
Inspired by [magic](https://github.com/miniMAC/magic).

[![https://gyazo.com/ee58db0f8e77abbe08e68c63cfbc9ad0](https://i.gyazo.com/ee58db0f8e77abbe08e68c63cfbc9ad0.gif)](https://gyazo.com/ee58db0f8e77abbe08e68c63cfbc9ad0)

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

#### Available Effects

These effects is available from `Effects`.

##### Magic effects

  * magic
  * twisterInDown
  * twisterInUp
  * swap

##### Bling

  * puffIn
  * puffOut
  * vanishIn
  * vanishOut

##### Static Effects

  * openDownLeft
  * openDownLeftRetourn
  * openDownRight
  * openDownRightRetourn
  * openUpLeft
  * openUpLeftRetourn
  * openUpRight
  * openUpRightRetourn

##### Static Effects Out
  * openDownLeftOut
  * openDownRightOut
  * openUpLeftOut
  * openUpRightOut

##### Perspective

  * perspectiveDown
  * perspectiveDownRetourn
  * perspectiveLeft
  * perspectiveLeftRetourn
  * perspectiveRight
  * perspectiveRightRetourn
  * perspectiveUp
  * perspectiveUpRetourn

##### Rotate

  * rotateDown
  * rotateLeft
  * rotateRight
  * rotateUp

##### Slide

  * slideDown
  * slideDownRetourn
  * slideLeft
  * slideLeftRetourn
  * slideRight
  * slideRightRetourn
  * slideUp
  * slideUpRetourn

##### Math

  * swashIn
  * swashOut
  * foolishIn
  * foolishOut
  * holeOut

##### Tin

  * tinDownIn
  * tinDownOut
  * tinLeftIn
  * tinLeftOut
  * tinRightIn
  * tinRightOut
  * tinUpIn
  * tinUpOut

##### Bomb

  * bombLeftOut
  * bombRightOut

##### Boing

  * boingInUp
  * boingOutDown

##### On the Space

  * spaceInDown
  * spaceInLeft
  * spaceInRight
  * spaceInUp
  * spaceOutDown
  * spaceOutLeft
  * spaceOutRight
  * spaceOutUp

##### Scale

  * scaleIn
  * scaleOut

#### Custom Effect

You can apply your custom effect by using your own function.

* `effect(progress) => {}`:

  `progress` will be passed as number(0 to 100).

  **return object should be in css format (Not React JSX style).**

  ```
  let myEffect = (progress) => {
    let transform = `scale(${Effects.utils.one2Zero(progress)}, ${Effects.utils.one2Zero(progress)})`;

    return {
      '-webkit-transform': transform,
      'transform': transform
    };
  }
  ```

#### Component API

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

See [example](https://github.com/georgeOsdDev/react-magic-effects/tree/master/example)

```bash
npm install
npm run start:example
```

## Tests

```bash
npm test
```
