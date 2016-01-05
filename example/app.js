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
      count:0
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

  render() {
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

    const title = {
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
        <table>
          <tbody>
            <tr>
              <td>
                <EffectContainer ref='magic1' autoPlay={false} onAnimationEnd={() => {console.log('magic1 end');}}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'magic1')}>Effect.magic</button>
              </td>
              <td>
                <EffectContainer ref='magic2' duration={5} loop={false} autoPlay={false}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'magic2')}>Effect.magic (duration 5)</button>
              </td>
              <td>
                <EffectContainer ref='magic3' duration={1} loop={true} autoPlay={false}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'magic3')}>Effect.magic (loop)</button>
                <button onClick={this.stop.bind(this, 'magic3')}>Stop</button>
              </td>
              <td>
                <EffectContainer ref='magic4' duration={1} loop={false} autoPlay={true}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'magic4')}>Effect.magic (autoPlay)</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='swap' autoPlay={false} effect={Effects.swap}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'swap')}>Effect.swap</button>
              </td>
              <td>
                <EffectContainer ref='twisterInDown' autoPlay={false} effect={Effects.twisterInDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'twisterInDown')}>Effect.twisterInDown</button>
              </td>
              <td>
                <EffectContainer ref='twisterInUp' autoPlay={false} effect={Effects.twisterInUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'twisterInUp')}>Effect.twisterInUp</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='openDownLeft' autoPlay={false} effect={Effects.openDownLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openDownLeft')}>Effect.openDownLeft</button>
              </td>
              <td>
                <EffectContainer ref='openDownRight' autoPlay={false} effect={Effects.openDownRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openDownRight')}>Effect.openDownRight</button>
              </td>
              <td>
                <EffectContainer ref='openUpLeft' autoPlay={false} effect={Effects.openUpLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openUpLeft')}>Effect.openUpLeft</button>
              </td>
              <td>
                <EffectContainer ref='openUpRight' autoPlay={false} effect={Effects.openUpRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openUpRight')}>Effect.openUpRight</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='openDownLeftRetourn' autoPlay={false} effect={Effects.openDownLeftRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openDownLeftRetourn')}>Effect.openDownLeftRetourn</button>
              </td>
              <td>
                <EffectContainer ref='openDownRightRetourn' autoPlay={false} effect={Effects.openDownRightRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openDownRightRetourn')}>Effect.openDownRightRetourn</button>
              </td>
              <td>
                <EffectContainer ref='openUpLeftRetourn' autoPlay={false} effect={Effects.openUpLeftRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openUpLeftRetourn')}>Effect.openUpLeftRetourn</button>
              </td>
              <td>
                <EffectContainer ref='openUpRightRetourn' autoPlay={false} effect={Effects.openUpRightRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openUpRightRetourn')}>Effect.openUpRightRetourn</button>
              </td>
            </tr>
            <tr>
              <td>
                <EffectContainer ref='openDownLeftOut' autoPlay={false} effect={Effects.openDownLeftOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openDownLeftOut')}>Effect.openDownLeftOut</button>
              </td>
              <td>
                <EffectContainer ref='openDownRightOut' autoPlay={false} effect={Effects.openDownRightOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openDownRightOut')}>Effect.openDownRightOut</button>
              </td>
              <td>
                <EffectContainer ref='openUpLeftOut' autoPlay={false} effect={Effects.openUpLeftOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openUpLeftOut')}>Effect.openUpLeftOut</button>
              </td>
              <td>
                <EffectContainer ref='openUpRightOut' autoPlay={false} effect={Effects.openUpRightOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openUpRightOut')}>Effect.openUpRightOut</button>
              </td>
            </tr>
            <tr>
              <td>
                <EffectContainer ref='scaleIn' autoPlay={false} effect={Effects.scaleIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'scaleIn')}>Effect.scaleIn</button>
              </td>
              <td>
                <EffectContainer ref='scaleOut' autoPlay={false} effect={Effects.scaleOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'scaleOut')}>Effect.scaleOut</button>
              </td>
            </tr>
            <tr>
              <td>
                <EffectContainer ref='puffIn' autoPlay={false} effect={Effects.puffIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'puffIn')}>Effect.puffIn</button>
              </td>

              <td>
                <EffectContainer ref='puffOut' autoPlay={false} effect={Effects.puffOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'puffOut')}>Effect.puffOut</button>
              </td>

              <td>
                <EffectContainer ref='vanishIn' autoPlay={false} effect={Effects.vanishIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'vanishIn')}>Effect.vanishIn</button>
              </td>

              <td>
                <EffectContainer ref='vanishOut' autoPlay={false} effect={Effects.vanishOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'vanishOut')}>Effect.vanishOut</button>
              </td>

            </tr>
            <tr>
              <td>
                <EffectContainer ref='perspectiveDown' autoPlay={false} effect={Effects.perspectiveDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'perspectiveDown')}>Effect.perspectiveDown</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveLeft' autoPlay={false} effect={Effects.perspectiveLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'perspectiveLeft')}>Effect.perspectiveLeft</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveRight' autoPlay={false} effect={Effects.perspectiveRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'perspectiveRight')}>Effect.perspectiveRight</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveUp' autoPlay={false} effect={Effects.perspectiveUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'perspectiveUp')}>Effect.perspectiveUp</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='perspectiveDownRetourn' autoPlay={false} effect={Effects.perspectiveDownRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'perspectiveDownRetourn')}>Effect.perspectiveDownRetourn</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveLeftRetourn' autoPlay={false} effect={Effects.perspectiveLeftRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'perspectiveLeftRetourn')}>Effect.perspectiveLeftRetourn</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveRightRetourn' autoPlay={false} effect={Effects.perspectiveRightRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'perspectiveRightRetourn')}>Effect.perspectiveRightRetourn</button>
              </td>
              <td>
                <EffectContainer ref='perspectiveUpRetourn' autoPlay={false} effect={Effects.perspectiveUpRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'perspectiveUpRetourn')}>Effect.perspectiveUpRetourn</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='rotateDown' autoPlay={false} effect={Effects.rotateDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'rotateDown')}>Effect.rotateDown</button>
              </td>
              <td>
                <EffectContainer ref='rotateLeft' autoPlay={false} effect={Effects.rotateLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'rotateLeft')}>Effect.rotateLeft</button>
              </td>
              <td>
                <EffectContainer ref='rotateRight' autoPlay={false} effect={Effects.rotateRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'rotateRight')}>Effect.rotateRight</button>
              </td>
              <td>
                <EffectContainer ref='rotateUp' autoPlay={false} effect={Effects.rotateUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'rotateUp')}>Effect.rotateUp</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='slideDown' autoPlay={false} effect={Effects.slideDown}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'slideDown')}>Effect.slideDown</button>
              </td>
              <td>
                <EffectContainer ref='slideLeft' autoPlay={false} effect={Effects.slideLeft}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'slideLeft')}>Effect.slideLeft</button>
              </td>
              <td>
                <EffectContainer ref='slideRight' autoPlay={false} effect={Effects.slideRight}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'slideRight')}>Effect.slideRight</button>
              </td>
              <td>
                <EffectContainer ref='slideUp' autoPlay={false} effect={Effects.slideUp}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'slideUp')}>Effect.slideUp</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='slideDownRetourn' autoPlay={false} effect={Effects.slideDownRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'slideDownRetourn')}>Effect.slideDownRetourn</button>
              </td>
              <td>
                <EffectContainer ref='slideLeftRetourn' autoPlay={false} effect={Effects.slideLeftRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'slideLeftRetourn')}>Effect.slideLeftRetourn</button>
              </td>
              <td>
                <EffectContainer ref='slideRightRetourn' autoPlay={false} effect={Effects.slideRightRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'slideRightRetourn')}>Effect.slideRightRetourn</button>
              </td>
              <td>
                <EffectContainer ref='slideUpRetourn' autoPlay={false} effect={Effects.slideUpRetourn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'slideUpRetourn')}>Effect.slideUpRetourn</button>
              </td>
            </tr>

            <tr>
              <td>
                <EffectContainer ref='swashIn' autoPlay={false} effect={Effects.swashIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'swashIn')}>Effect.swashIn</button>
              </td>

              <td>
                <EffectContainer ref='swashOut' autoPlay={false} effect={Effects.swashOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'swashOut')}>Effect.swashOut</button>
              </td>

              <td>
                <EffectContainer ref='foolishIn' autoPlay={false} effect={Effects.foolishIn}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'foolishIn')}>Effect.foolishIn</button>
              </td>

              <td>
                <EffectContainer ref='foolishOut' autoPlay={false} effect={Effects.foolishOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'foolishOut')}>Effect.foolishOut</button>
              </td>

              <td>
                <EffectContainer ref='holeOut' autoPlay={false} effect={Effects.holeOut}>
                  <div style={target}>{image}</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'holeOut')}>Effect.holeOut</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

ReactDom.render(<App/>, document.getElementById('out'));
