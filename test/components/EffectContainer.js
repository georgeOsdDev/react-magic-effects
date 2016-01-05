'use strict';
require("babel-polyfill");
import React from 'react';
import ReactDom from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import chai from 'chai';
let expect = chai.expect;
import EffectContainer from '../../src/components/EffectContainer';


describe('Test of EffectContainer', () => {

  let component;

  beforeEach(() => {
  });

  describe('test of props', () =>{
    it('should have default properties', function () {
      component = ReactTestUtils.renderIntoDocument(<EffectContainer />);
      expect(false).to.be.eql(true);
    });
  });
});
