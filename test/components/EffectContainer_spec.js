'use strict';
require("babel-polyfill");
import React from 'react';
import ReactDom from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import chai from 'chai';
import sinon from 'sinon';
let expect = chai.expect;
import EffectContainer from '../../src/components/EffectContainer';


describe('Test of EffectContainer,', () => {

  let component;

  beforeEach(() => {
  });

  describe('test of props,', () =>{
    it('should have default properties', function () {
      component = ReactTestUtils.renderIntoDocument(<EffectContainer><span className='result'>result</span></EffectContainer>);
      expect(component.props.effect).to.be.a('function');
      expect(component.props.duration).to.be.equal(1);
      expect(component.props.loop).to.be.equal(false);
      expect(component.props.autoPlay).to.be.equal(true);
    });
  });

  describe('test of rendered element,', () =>{
    component = ReactTestUtils.renderIntoDocument(<EffectContainer><span className='result'>result</span></EffectContainer>);
    it('should render it\'s children', function () {
      let child = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'result');
      expect(child.textContent).to.be.equal('result');
    });
  });

  describe('test of animated result,', () => {

    let testEffect = (progress) => {
      let bgColor;
      if (progress < 99) {
        bgColor = 'blue';
      } else {
        bgColor = 'yellow';
      }
      return {
        'background-color': bgColor,
        '-webkit-transition': 'background-color',
        'transition': 'background-color'
      };
    }

    describe('when autoPlay = false,', () => {
      let onAnimationEnd = sinon.spy();
      component = ReactTestUtils.renderIntoDocument(
        <EffectContainer effect={testEffect} autoPlay={false} onAnimationEnd={onAnimationEnd}>
          <span className='result' style={{'backgroundColor':'red', height: '150px', width: '150px'}}>result</span>
        </EffectContainer>);

      let result = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'result');
      let el = ReactDom.findDOMNode(result);

      it('should not start animation, (style should not be changed)', function () {
        expect(el.style.backgroundColor).to.be.equal('red');
      });

      it('will not trigger onAnimationEnd prop', function () {
        expect(onAnimationEnd.called).to.be.equal(false);
      });
    });

    describe('when autoplay = true,', function(){

      describe('when duration = 1(default),', function(){
        this.timeout(2000);
        let onAnimationEnd = sinon.spy();
        component = ReactTestUtils.renderIntoDocument(
          <EffectContainer effect={testEffect} autoPlay={true} onAnimationEnd={onAnimationEnd}>
            <span className='result' style={{'backgroundColor':'red'}}>result</span>
          </EffectContainer>);

        let result = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'result');
        let el = ReactDom.findDOMNode(result);

        it('will not trigger onAnimationEnd prop immediately', function () {
          expect(onAnimationEnd.called).to.be.equal(false);
        });

        it('should start animation, animation will be finish after 1 second', function (done) {
          setTimeout(() => {
            expect(el.style.backgroundColor).to.be.equal('yellow');
            it('will trigger onAnimationEnd prop onece after 1 second', function (done) {
              expect(onAnimationEnd.called).to.be.equal(true);
            });
            done();
          }, 1500);
        });
      });

      describe('when duration = 5,', function(){
        this.timeout(6000);
        let onAnimationEnd = sinon.spy();
        component = ReactTestUtils.renderIntoDocument(
          <EffectContainer duration={5} effect={testEffect} autoPlay={true} onAnimationEnd={onAnimationEnd}>
            <span className='result' style={{'backgroundColor':'red'}}>result</span>
          </EffectContainer>);

        let result = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'result');
        let el = ReactDom.findDOMNode(result);

        it('will be in animation progress after 1 second', function (done) {
          setTimeout(() => {
            expect(el.style.backgroundColor).to.be.equal('blue');
            it('will not trigger onAnimationEnd prop yet', function (done) {
              expect(onAnimationEnd.called).to.be.equal(false);
            });
            done();
          }, 1000);
        });

        it('should start animation, animation will be finish after 5 second', function (done) {
          setTimeout(() => {
            expect(el.style.backgroundColor).to.be.equal('yellow');
            it('will trigger onAnimationEnd prop onece', function (done) {
              expect(onAnimationEnd.called).to.be.equal(false);
            });
            done();
          }, 5500);
        });

      });

      describe('when loop = true,', function(){
        this.timeout(5000);
          it('will never trigger onAnimationEnd', function (done) {
            let onAnimationEnd = sinon.spy();
            component = ReactTestUtils.renderIntoDocument(
              <EffectContainer autoPlay={true} loop={true} onAnimationEnd={onAnimationEnd}>
                <span className='result' style={{'backgroundColor':'red'}}>result</span>
              </EffectContainer>);
            setTimeout(() => {
              expect(onAnimationEnd.args.called).to.be.not.equal(true);
              done();
            }, 4000);
          });
      });
    });

    describe('test of Api,', () =>{

      component = ReactTestUtils.renderIntoDocument(
        <EffectContainer effect={testEffect} autoPlay={false}>
          <span className='result'>result</span>
        </EffectContainer>);

      let result = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'result');
      let el = ReactDom.findDOMNode(result);

      describe('play api,', () => {
        it('should have play api', () => {
          expect(component.play).to.be.a('function');
        });

        it('should have handle after play api called', () => {
          component.play();
          expect(component.handle).to.be.not.equal(null);
        });

      });

      describe('stop api,', () => {
        it('should have stop api', () => {
          expect(component.stop).to.be.a('function');
        });

        it('should not have handle after stop api called', () => {
          component.play();
          component.stop();
          expect(component.handle).to.be.equal(null);
        });
      });

      describe('reset api,', () => {
        it('should have reset api', () => {
          expect(component.reset).to.be.a('function');
        });

        it('should apply init animation after reset api called', function(done){
          component.reset();
          setTimeout(() => {
            done();
            expect(el.style.backgroundColor).to.be.equal('blue');
          }, 500);
        });

      });
    });
  });
});
