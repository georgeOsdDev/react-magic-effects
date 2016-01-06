'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import EffectContainer, {Effects} from '../lib/index.js';

//allow react dev tools work
window.React = React;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoPlay:false,
      loop:false,
      duration: 1
    };
  }

  play(ref) {
    if (this.refs[ref] && this.refs[ref].play){
      this.refs[ref].play();
    }
  }

  stop(ref) {
    if (this.refs[ref] && this.refs[ref].stop){
      this.refs[ref].stop();
    }
  }

  reset(ref) {
    if (this.refs[ref] && this.refs[ref].stop){
      this.refs[ref].reset();
    }
  }

  toggleAutoPlay(){
    this.setState({
      autoPlay: !this.state.autoPlay
    });
  }

  toggleLoop(){
    this.setState({
      loop: !this.state.loop
    });
  }
  changeDuration(){
    this.setState({
      duration: this.state.duration === 1 ? 3 : 1
    });
  }

  render() {

    const title = {
      fontSize: '2em',
      margin: '.6em 0'
    };

    const target = {
      height: '150px',
      width: '150px',
      display: 'inline-block',
      margin: '5px',
      backgroundColor: '#222222',
      color: 'white',
      padding: 'auto',
      textAlign: 'center',
      verticalAlign: 'center',
      fontSize: '14px',
      lineHeight: '150px'
    };

    const btn = {
      width: '100px'
    };

    const box = {
      verticalAlign: 'middle',
      display: 'inline-block',
      height: '75px',
      width: '75px'
    };

    let image = (<img src="./logo.svg" style={box}/>);

    return (


      <div>
        <input type="checkbox" onChange={this.toggleAutoPlay.bind(this)} /> AutoPlay
        <input type="checkbox" onChange={this.toggleLoop.bind(this)} /> Loop
        <input type="checkbox" onChange={this.changeDuration.bind(this)} /> Slow

        <table>
          <tbody>
            <tr>
              <td style={title}>Magic Effects</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='magic1' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} onAnimationEnd={() => {console.log('magic1 end');}}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'magic1')}>Effect.magic</button>
              </td>
              <td>
                <EffectContainer ref='twisterInDown' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.twisterInDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'twisterInDown')}>Effect.twisterInDown</button>
              </td>

              <td>
                <EffectContainer ref='twisterInUp' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.twisterInUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'twisterInUp')}>Effect.twisterInUp</button>
              </td>

              <td>
                <EffectContainer ref='swap' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.swap}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'swap')}>Effect.swap</button>
              </td>
              {/**
                <td>
                  <EffectContainer ref='magic2' duration={5} loop={false} duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop}>
                    <div style={target}>{image}</div>
                  </EffectContainer>
                </td>
                <td style={btn}>
                  <button onClick={this.play.bind(this, 'magic2')}>Effect.magic (duration 5)</button>
                </td>
                <td>
                  <EffectContainer ref='magic3' duration={1} loop={true} duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop}>
                    <div style={target}>{image}</div>
                  </EffectContainer>
                </td>
                <td style={btn}>
                  <button onClick={this.play.bind(this, 'magic3')}>Effect.magic (loop)</button>
                  <button onClick={this.stop.bind(this, 'magic3')}>Stop</button>
                </td>
                <td>
                  <EffectContainer ref='magic4' duration={1} loop={false} autoPlay={true}>
                    <div style={target}>{image}</div>
                  </EffectContainer>
                </td>
                <td style={btn}>
                  <button onClick={this.play.bind(this, 'magic4')}>Effect.magic (autoPlay)</button>
                </td>
              **/}
            </tr>

            <tr>
              <td style={title}>Bling</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='puffIn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.puffIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'puffIn')}>Effect.puffIn</button>
              </td>

              <td>
                <EffectContainer ref='puffOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.puffOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'puffOut')}>Effect.puffOut</button>
              </td>

              <td>
                <EffectContainer ref='vanishIn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.vanishIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'vanishIn')}>Effect.vanishIn</button>
              </td>

              <td>
                <EffectContainer ref='vanishOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.vanishOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'vanishOut')}>Effect.vanishOut</button>
              </td>
            </tr>

            <tr>
              <td style={title}>Static Effects</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='openDownLeft' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openDownLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openDownLeft')}>Effect.openDownLeft</button>
              </td>
              <td>
                <EffectContainer ref='openDownRight' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openDownRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openDownRight')}>Effect.openDownRight</button>
              </td>
              <td>
                <EffectContainer ref='openUpLeft' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openUpLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openUpLeft')}>Effect.openUpLeft</button>
              </td>
              <td>
                <EffectContainer ref='openUpRight' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openUpRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openUpRight')}>Effect.openUpRight</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='openDownLeftRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openDownLeftRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openDownLeftRetourn')}>Effect.openDownLeftRetourn</button>
              </td>
              <td>
                <EffectContainer ref='openDownRightRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openDownRightRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openDownRightRetourn')}>Effect.openDownRightRetourn</button>
              </td>
              <td>
                <EffectContainer ref='openUpLeftRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openUpLeftRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openUpLeftRetourn')}>Effect.openUpLeftRetourn</button>
              </td>
              <td>
                <EffectContainer ref='openUpRightRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openUpRightRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openUpRightRetourn')}>Effect.openUpRightRetourn</button>
              </td>
            </tr>

            <tr>
              <td style={title}>Static Effects Out</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='openDownLeftOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openDownLeftOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openDownLeftOut')}>Effect.openDownLeftOut</button>
              </td>
              <td>
                <EffectContainer ref='openDownRightOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openDownRightOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openDownRightOut')}>Effect.openDownRightOut</button>
              </td>
              <td>
                <EffectContainer ref='openUpLeftOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openUpLeftOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openUpLeftOut')}>Effect.openUpLeftOut</button>
              </td>
              <td>
                <EffectContainer ref='openUpRightOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.openUpRightOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'openUpRightOut')}>Effect.openUpRightOut</button>
              </td>
            </tr>

            <tr>
              <td style={title}>Perspective</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='perspectiveDown' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.perspectiveDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'perspectiveDown')}>Effect.perspectiveDown</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveUp' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.perspectiveUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'perspectiveUp')}>Effect.perspectiveUp</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveLeft' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.perspectiveLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'perspectiveLeft')}>Effect.perspectiveLeft</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveRight' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.perspectiveRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'perspectiveRight')}>Effect.perspectiveRight</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='perspectiveDownRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.perspectiveDownRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'perspectiveDownRetourn')}>Effect.perspectiveDownRetourn</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveUpRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.perspectiveUpRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'perspectiveUpRetourn')}>Effect.perspectiveUpRetourn</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveLeftRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.perspectiveLeftRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'perspectiveLeftRetourn')}>Effect.perspectiveLeftRetourn</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveRightRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.perspectiveRightRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'perspectiveRightRetourn')}>Effect.perspectiveRightRetourn</button>
              </td>
            </tr>

            <tr>
              <td style={title}>Rotate</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='rotateDown' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.rotateDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'rotateDown')}>Effect.rotateDown</button>
              </td>
              <td>
                <EffectContainer ref='rotateUp' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.rotateUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'rotateUp')}>Effect.rotateUp</button>
              </td>
              <td>
                <EffectContainer ref='rotateLeft' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.rotateLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'rotateLeft')}>Effect.rotateLeft</button>
              </td>
              <td>
                <EffectContainer ref='rotateRight' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.rotateRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'rotateRight')}>Effect.rotateRight</button>
              </td>
            </tr>

            <tr>
              <td style={title}>Slide</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='slideDown' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.slideDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'slideDown')}>Effect.slideDown</button>
              </td>
              <td>
                <EffectContainer ref='slideUp' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.slideUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'slideUp')}>Effect.slideUp</button>
              </td>
              <td>
                <EffectContainer ref='slideLeft' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.slideLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'slideLeft')}>Effect.slideLeft</button>
              </td>
              <td>
                <EffectContainer ref='slideRight' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.slideRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'slideRight')}>Effect.slideRight</button>
              </td>
            </tr>
            <tr>
              <td>
                <EffectContainer ref='slideDownRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.slideDownRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'slideDownRetourn')}>Effect.slideDownRetourn</button>
              </td>
              <td>
                <EffectContainer ref='slideUpRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.slideUpRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'slideUpRetourn')}>Effect.slideUpRetourn</button>
              </td>
              <td>
                <EffectContainer ref='slideLeftRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.slideLeftRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'slideLeftRetourn')}>Effect.slideLeftRetourn</button>
              </td>
              <td>
                <EffectContainer ref='slideRightRetourn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.slideRightRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'slideRightRetourn')}>Effect.slideRightRetourn</button>
              </td>
            </tr>

            <tr>
              <td style={title}>Math</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='swashOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.swashOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'swashOut')}>Effect.swashOut</button>
              </td>

              <td>
                <EffectContainer ref='swashIn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.swashIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'swashIn')}>Effect.swashIn</button>
              </td>

              <td>
                <EffectContainer ref='foolishOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.foolishOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'foolishOut')}>Effect.foolishOut</button>
              </td>
              <td>
                <EffectContainer ref='foolishIn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.foolishIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'foolishIn')}>Effect.foolishIn</button>
              </td>
            </tr>
            <tr>
              <td>
                <EffectContainer ref='holeOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.holeOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'holeOut')}>Effect.holeOut</button>
              </td>
            </tr>

            <tr>
              <td style={title}>Tin</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='tinDownOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.tinDownOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'tinDownOut')}>Effect.tinDownOut</button>
              </td>
              <td>
                <EffectContainer ref='tinUpOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.tinUpOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'tinUpOut')}>Effect.tinUpOut</button>
              </td>
              <td>
                <EffectContainer ref='tinLeftOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.tinLeftOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'tinLeftOut')}>Effect.tinLeftOut</button>
              </td>
              <td>
                <EffectContainer ref='tinRightOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.tinRightOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'tinRightOut')}>Effect.tinRightOut</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='tinDownIn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.tinDownIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'tinDownIn')}>Effect.tinDownIn</button>
              </td>
              <td>
                <EffectContainer ref='tinUpIn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.tinUpIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'tinUpIn')}>Effect.tinUpIn</button>
              </td>
              <td>
                <EffectContainer ref='tinLeftIn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.tinLeftIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'tinLeftIn')}>Effect.tinLeftIn</button>
              </td>
              <td>
                <EffectContainer ref='tinRightIn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.tinRightIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'tinRightIn')}>Effect.tinRightIn</button>
              </td>
            </tr>

            <tr>
              <td style={title}>Bomb</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='bombLeftOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.bombLeftOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'bombLeftOut')}>Effect.bombLeftOut</button>
              </td>
              <td>
                <EffectContainer ref='bombRightOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.bombRightOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'bombRightOut')}>Effect.bombRightOut</button>
              </td>
            </tr>

            <tr>
              <td style={title}>Boing</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='boingInUp' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.boingInUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'boingInUp')}>Effect.boingInUp</button>
              </td>
              <td>
                <EffectContainer ref='boingOutDown' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.boingOutDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'boingOutDown')}>Effect.boingOutDown</button>
              </td>
            </tr>

            <tr>
              <td style={title}>On the Space</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='spaceInDown' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.spaceInDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'spaceInDown')}>Effect.spaceInDown</button>
              </td>
              <td>
                <EffectContainer ref='spaceInUp' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.spaceInUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'spaceInUp')}>Effect.spaceInUp</button>
              </td>
              <td>
                <EffectContainer ref='spaceInLeft' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.spaceInLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'spaceInLeft')}>Effect.spaceInLeft</button>
              </td>
              <td>
                <EffectContainer ref='spaceInRight' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.spaceInRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'spaceInRight')}>Effect.spaceInRight</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='spaceOutDown' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.spaceOutDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'spaceOutDown')}>Effect.spaceOutDown</button>
              </td>
              <td>
                <EffectContainer ref='spaceOutLeft' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.spaceOutLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'spaceOutLeft')}>Effect.spaceOutLeft</button>
              </td>
              <td>
                <EffectContainer ref='spaceOutRight' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.spaceOutRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'spaceOutRight')}>Effect.spaceOutRight</button>
              </td>
              <td>
                <EffectContainer ref='spaceOutUp' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.spaceOutUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'spaceOutUp')}>Effect.spaceOutUp</button>
              </td>
            </tr>


            <tr>
              <td style={title}>Scale</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='scaleIn' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.scaleIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'scaleIn')}>Effect.scaleIn</button>
              </td>
              <td>
                <EffectContainer ref='scaleOut' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.scaleOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'scaleOut')}>Effect.scaleOut</button>
              </td>
            </tr>


            <tr>
              <td style={title}>Others</td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='rainbow' duration={this.state.duration} autoPlay={this.state.autoPlay} loop={this.state.loop} effect={Effects.rainbow}>
                  <div style={target}></div>
                </EffectContainer>
              </td>
              <td style={btn}>
                <button onClick={this.play.bind(this, 'rainbow')}>Effect.rainbow</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }
};

ReactDom.render(<App/>, document.getElementById('out'));
