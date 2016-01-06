'use strict';

import merge from 'merge';
import now from 'performance-now';
import raf from 'raf';
import React from 'react';
import ReactDom from 'react-dom';
import Effects from '../Effects';

const BASE_STYLE = {
  WebkitAnimationDuration: '1s',
  animationDuration: '1s',
  WebkitAnimationFillMode: 'both',
  animationFillMode: 'both'
};

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

  componentWillUnmount(){
    if (this.handle){
      raf.cancel(this.handle);
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

    let frameLoop = () => {
      let lastTime = now();
      let frame = Math.floor((lastTime - this.startTime) / (1000.0 / 60.0) % (60 * duration));
      let progress = Math.floor((frame / ((60 * duration) - 1)) * 100);
      let style = effect(progress);
      if (progress >= 100 && !loop){
        this._attachStyle(target, style, () => {
          raf.cancel(this.handle);
          this.handle = null;
          onAnimationEnd();
        });
      } else {
        this._attachStyle(target, style, () => {
          this.handle = raf(frameLoop);
        });
      }
    };
    this.handle = raf(frameLoop);
  }

  stop() {
    if (this.handle){
      raf.cancel(this.handle);
      this.handle = null;
    }
  }

  reset() {
    let target = ReactDom.findDOMNode(this.refs.target);
    let style = this.props.effect(0);
    this._attachStyle(target, style, () => {});
  }

  _attachStyle(node, style, cb) {
    for (let key in style) {
      node.style[key] = style[key];
    }
    cb();
  }

  // @TODO
  // pause() {
  // }
  // resume(){
  // }

  render() {
    let newStyle = merge(this.props.children.props.style, BASE_STYLE);
    return React.cloneElement(this.props.children, {ref: 'target', style: newStyle});;
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
