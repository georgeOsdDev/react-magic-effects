'use strict';

import now from 'performance-now';
import raf from 'raf';
import React from 'react';
import ReactDom from 'react-dom';
import Effects from '../Effects';

class EffectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handle = null;
  }

  componentWillMount(){
  }

  componentDidMount(){
    if (this.props.autoPlay) {
      this.play();
    }
  }

  componentDidUpdate(){
    if (this.props.autoPlay) {
      this.play();
    }
  }

  play(){
    let target = ReactDom.findDOMNode(this.refs.target);
    this.startTime = now()
    let {
      duration,
      effect,
      loop,
      onAnimationEnd
    } = this.props;

    let attachStyle = (node, style, cb) => {
      for (let key in style) {
        node.style[key] = style[key];
      }
      cb();
    }

    let frameLoop = () => {
      let lastTime = now();
      let frame = Math.floor((lastTime - this.startTime) / (1000.0 / 60.0) % (60 * duration));
      let progress = Math.floor((frame / ((60 * duration) - 1)) * 100);
      let style = effect(progress);
      if (progress >= 100 && !loop){
        attachStyle(target, style, () => {
          raf.cancel(this.handle);
          onAnimationEnd();
        });
      } else {
        attachStyle(target, style, () => {
          this.handle = raf(frameLoop);
        });
      }
    };
    this.handle = raf(frameLoop);
  }

  stop() {
    if (this.handle){
      raf.cancel(this.handle);
    }
  }

  // pause() {
  // }
  //
  // resume(lastProgress){
  // }

  render() {
    return React.cloneElement(this.props.children, {ref: 'target'});;
  }
}

EffectContainer.propTypes = {
  effect: React.PropTypes.func,
  duration: React.PropTypes.number,
  loop: React.PropTypes.bool,
  autoPlay: React.PropTypes.bool,
  onAnimationEnd: React.PropTypes.func
};

EffectContainer.defaultProps = {
  effect: Effects.magic,
  duration: 1,
  loop: false,
  autoPlay: true,
  onAnimationEnd: () => {}
};

export default EffectContainer;
