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

    this.pauseProgress = {
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

  render() {
    let target = {
      height: '100px',
      width: '100px',
      display: 'inline-block',
      margin: '5px',
      backgroundColor: 'gray'
    };

    let title = {
      width: '100px'
    };

    return (

      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <EffectContainer ref='magic1' duration={1} loop={false} autoPlay={false} onAnimationEnd={() => {console.log('magic1 end');}}>
                  <div style={target}>magic</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'magic1')}>Effect.magic</button>
              </td>
              <td>
                <EffectContainer ref='magic2' duration={5} loop={false} autoPlay={false}>
                  <div style={target}>magic</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'magic2')}>Effect.magic (duration 5)</button>
              </td>
              <td>
                <EffectContainer ref='magic3' duration={1} loop={true} autoPlay={false}>
                  <div style={target}>magic</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'magic3')}>Effect.magic (loop)</button>
                <button onClick={this.stop.bind(this, 'magic3')}>Stop</button>
              </td>
              <td>
                <EffectContainer ref='magic4' duration={1} loop={false} autoPlay={true}>
                  <div style={target}>magic</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'magic4')}>Effect.magic (autoPlay)</button>
              </td>
            </tr>
            <tr>
              <td>
                <EffectContainer ref='openDownLeft' duration={1} loop={false} autoPlay={false} effect={Effects.openDownLeft}>
                  <div style={target}>openDownLeft</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'openDownLeft')}>Effect.openDownLeft</button>
              </td>
            </tr>
            <tr>
              <td>
                <EffectContainer ref='scaleIn' duration={1} loop={false} autoPlay={false} effect={Effects.scaleIn}>
                  <div style={target}>scaleIn</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'scaleIn')}>Effect.scaleIn</button>
              </td>
            </tr>
            <tr>
              <td>
                <EffectContainer ref='scaleOut' duration={1} loop={false} autoPlay={false} effect={Effects.scaleOut}>
                  <div style={target}>scaleOut</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'scaleOut')}>Effect.scaleOut</button>
              </td>
            </tr>
            <tr>
              <td>
                <EffectContainer ref='puffIn' duration={1} loop={false} autoPlay={false} effect={Effects.puffIn}>
                  <div style={target}>puffIn</div>
                </EffectContainer>
              </td>
              <td style={title}>
                <button onClick={this.play.bind(this, 'puffIn')}>Effect.puffIn</button>
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{position: 'fixed', 'bottom': '10px'}}>
          Source code can be found at <a href='https://github.com/georgeOsdDev/react-magic-effects/tree/master/example'>GitHub</a>
        </p>

      </div>
    )
  }
};

ReactDom.render(<App/>, document.getElementById('out'));
