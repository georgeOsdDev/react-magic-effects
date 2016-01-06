'use strict';
import chai from 'chai';
let expect = chai.expect;
import Utils from '../../src/effects/utils';

describe('Test of utils', () => {

  describe('calc method calculate current value', () => {

    it('return 0 when startValue = 0, endValue=1000, progress=0', (done) => {
      let result = Utils.calc(0, 1000, 0);
      expect(result).to.be.eql(0);
      done();
    });
    it('return 500 when startValue = 0, endValue=1000, progress=50', (done) => {
      let result = Utils.calc(0, 1000, 50);
      expect(result).to.be.eql(500);
      done();
    });
    it('return 1000 when startValue = 0, endValue=1000, progress=100', (done) => {
      let result = Utils.calc(0, 1000, 100);
      expect(result).to.be.eql(1000);
      done();
    });
    it('return 0 when startValue = 0, endValue=-1000, progress=0', (done) => {
      let result = Utils.calc(0, -1000, 0);
      expect(result).to.be.eql(0);
      done();
    });
    it('return -500 when startValue = 0, endValue=-1000, progress=50', (done) => {
      let result = Utils.calc(0, -1000, 50);
      expect(result).to.be.eql(-500);
      done();
    });
    it('return -1000 when startValue = 0, endValue=-1000, progress=100', (done) => {
      let result = Utils.calc(0, -1000, 100);
      expect(result).to.be.eql(-1000);
      done();
    });
  });

  describe('zero2One method calculate current value between 0 to 1', () => {

    it('return 0 when progress=0', (done) => {
      let result = Utils.zero2One(0);
      expect(result).to.be.eql(0);
      done();
    });
    it('return 0.5 when progress=50', (done) => {
      let result = Utils.zero2One(50);
      expect(result).to.be.eql(0.5);
      done();
    });
    it('return 1 when progress=100', (done) => {
      let result = Utils.zero2One(100);
      expect(result).to.be.eql(1);
      done();
    });
  });

  describe('one2Zero method calculate current value between 1 to 0', () => {

    it('return 1 when progress=0', (done) => {
      let result = Utils.one2Zero(0);
      expect(result).to.be.eql(1);
      done();
    });
    it('return 0.5 when progress=50', (done) => {
      let result = Utils.one2Zero(50);
      expect(result).to.be.eql(0.5);
      done();
    });
    it('return 0 when progress=100', (done) => {
      let result = Utils.one2Zero(100);
      expect(result).to.be.eql(0);
      done();
    });
  });
});
