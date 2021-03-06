'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boingInUp = require('./boingInUp');

var _boingInUp2 = _interopRequireDefault(_boingInUp);

var _boingOutDown = require('./boingOutDown');

var _boingOutDown2 = _interopRequireDefault(_boingOutDown);

var _bombLeftOut = require('./bombLeftOut');

var _bombLeftOut2 = _interopRequireDefault(_bombLeftOut);

var _bombRightOut = require('./bombRightOut');

var _bombRightOut2 = _interopRequireDefault(_bombRightOut);

var _foolishIn = require('./foolishIn');

var _foolishIn2 = _interopRequireDefault(_foolishIn);

var _foolishOut = require('./foolishOut');

var _foolishOut2 = _interopRequireDefault(_foolishOut);

var _holeOut = require('./holeOut');

var _holeOut2 = _interopRequireDefault(_holeOut);

var _magic = require('./magic');

var _magic2 = _interopRequireDefault(_magic);

var _openDownLeft = require('./openDownLeft');

var _openDownLeft2 = _interopRequireDefault(_openDownLeft);

var _openDownLeftOut = require('./openDownLeftOut');

var _openDownLeftOut2 = _interopRequireDefault(_openDownLeftOut);

var _openDownLeftRetourn = require('./openDownLeftRetourn');

var _openDownLeftRetourn2 = _interopRequireDefault(_openDownLeftRetourn);

var _openDownRight = require('./openDownRight');

var _openDownRight2 = _interopRequireDefault(_openDownRight);

var _openDownRightOut = require('./openDownRightOut');

var _openDownRightOut2 = _interopRequireDefault(_openDownRightOut);

var _openDownRightRetourn = require('./openDownRightRetourn');

var _openDownRightRetourn2 = _interopRequireDefault(_openDownRightRetourn);

var _openUpLeft = require('./openUpLeft');

var _openUpLeft2 = _interopRequireDefault(_openUpLeft);

var _openUpLeftOut = require('./openUpLeftOut');

var _openUpLeftOut2 = _interopRequireDefault(_openUpLeftOut);

var _openUpLeftRetourn = require('./openUpLeftRetourn');

var _openUpLeftRetourn2 = _interopRequireDefault(_openUpLeftRetourn);

var _openUpRight = require('./openUpRight');

var _openUpRight2 = _interopRequireDefault(_openUpRight);

var _openUpRightOut = require('./openUpRightOut');

var _openUpRightOut2 = _interopRequireDefault(_openUpRightOut);

var _openUpRightRetourn = require('./openUpRightRetourn');

var _openUpRightRetourn2 = _interopRequireDefault(_openUpRightRetourn);

var _perspectiveDown = require('./perspectiveDown');

var _perspectiveDown2 = _interopRequireDefault(_perspectiveDown);

var _perspectiveDownRetourn = require('./perspectiveDownRetourn');

var _perspectiveDownRetourn2 = _interopRequireDefault(_perspectiveDownRetourn);

var _perspectiveLeft = require('./perspectiveLeft');

var _perspectiveLeft2 = _interopRequireDefault(_perspectiveLeft);

var _perspectiveLeftRetourn = require('./perspectiveLeftRetourn');

var _perspectiveLeftRetourn2 = _interopRequireDefault(_perspectiveLeftRetourn);

var _perspectiveRight = require('./perspectiveRight');

var _perspectiveRight2 = _interopRequireDefault(_perspectiveRight);

var _perspectiveRightRetourn = require('./perspectiveRightRetourn');

var _perspectiveRightRetourn2 = _interopRequireDefault(_perspectiveRightRetourn);

var _perspectiveUp = require('./perspectiveUp');

var _perspectiveUp2 = _interopRequireDefault(_perspectiveUp);

var _perspectiveUpRetourn = require('./perspectiveUpRetourn');

var _perspectiveUpRetourn2 = _interopRequireDefault(_perspectiveUpRetourn);

var _puffIn = require('./puffIn');

var _puffIn2 = _interopRequireDefault(_puffIn);

var _puffOut = require('./puffOut');

var _puffOut2 = _interopRequireDefault(_puffOut);

var _rotateDown = require('./rotateDown');

var _rotateDown2 = _interopRequireDefault(_rotateDown);

var _rotateLeft = require('./rotateLeft');

var _rotateLeft2 = _interopRequireDefault(_rotateLeft);

var _rotateRight = require('./rotateRight');

var _rotateRight2 = _interopRequireDefault(_rotateRight);

var _rotateUp = require('./rotateUp');

var _rotateUp2 = _interopRequireDefault(_rotateUp);

var _scaleIn = require('./scaleIn');

var _scaleIn2 = _interopRequireDefault(_scaleIn);

var _scaleOut = require('./scaleOut');

var _scaleOut2 = _interopRequireDefault(_scaleOut);

var _slideDown = require('./slideDown');

var _slideDown2 = _interopRequireDefault(_slideDown);

var _slideDownRetourn = require('./slideDownRetourn');

var _slideDownRetourn2 = _interopRequireDefault(_slideDownRetourn);

var _slideLeft = require('./slideLeft');

var _slideLeft2 = _interopRequireDefault(_slideLeft);

var _slideLeftRetourn = require('./slideLeftRetourn');

var _slideLeftRetourn2 = _interopRequireDefault(_slideLeftRetourn);

var _slideRight = require('./slideRight');

var _slideRight2 = _interopRequireDefault(_slideRight);

var _slideRightRetourn = require('./slideRightRetourn');

var _slideRightRetourn2 = _interopRequireDefault(_slideRightRetourn);

var _slideUp = require('./slideUp');

var _slideUp2 = _interopRequireDefault(_slideUp);

var _slideUpRetourn = require('./slideUpRetourn');

var _slideUpRetourn2 = _interopRequireDefault(_slideUpRetourn);

var _spaceInDown = require('./spaceInDown');

var _spaceInDown2 = _interopRequireDefault(_spaceInDown);

var _spaceInLeft = require('./spaceInLeft');

var _spaceInLeft2 = _interopRequireDefault(_spaceInLeft);

var _spaceInRight = require('./spaceInRight');

var _spaceInRight2 = _interopRequireDefault(_spaceInRight);

var _spaceInUp = require('./spaceInUp');

var _spaceInUp2 = _interopRequireDefault(_spaceInUp);

var _spaceOutDown = require('./spaceOutDown');

var _spaceOutDown2 = _interopRequireDefault(_spaceOutDown);

var _spaceOutLeft = require('./spaceOutLeft');

var _spaceOutLeft2 = _interopRequireDefault(_spaceOutLeft);

var _spaceOutRight = require('./spaceOutRight');

var _spaceOutRight2 = _interopRequireDefault(_spaceOutRight);

var _spaceOutUp = require('./spaceOutUp');

var _spaceOutUp2 = _interopRequireDefault(_spaceOutUp);

var _swap = require('./swap');

var _swap2 = _interopRequireDefault(_swap);

var _swashIn = require('./swashIn');

var _swashIn2 = _interopRequireDefault(_swashIn);

var _swashOut = require('./swashOut');

var _swashOut2 = _interopRequireDefault(_swashOut);

var _tinDownIn = require('./tinDownIn');

var _tinDownIn2 = _interopRequireDefault(_tinDownIn);

var _tinDownOut = require('./tinDownOut');

var _tinDownOut2 = _interopRequireDefault(_tinDownOut);

var _tinLeftIn = require('./tinLeftIn');

var _tinLeftIn2 = _interopRequireDefault(_tinLeftIn);

var _tinLeftOut = require('./tinLeftOut');

var _tinLeftOut2 = _interopRequireDefault(_tinLeftOut);

var _tinRightIn = require('./tinRightIn');

var _tinRightIn2 = _interopRequireDefault(_tinRightIn);

var _tinRightOut = require('./tinRightOut');

var _tinRightOut2 = _interopRequireDefault(_tinRightOut);

var _tinUpIn = require('./tinUpIn');

var _tinUpIn2 = _interopRequireDefault(_tinUpIn);

var _tinUpOut = require('./tinUpOut');

var _tinUpOut2 = _interopRequireDefault(_tinUpOut);

var _twisterInDown = require('./twisterInDown');

var _twisterInDown2 = _interopRequireDefault(_twisterInDown);

var _twisterInUp = require('./twisterInUp');

var _twisterInUp2 = _interopRequireDefault(_twisterInUp);

var _vanishIn = require('./vanishIn');

var _vanishIn2 = _interopRequireDefault(_vanishIn);

var _vanishOut = require('./vanishOut');

var _vanishOut2 = _interopRequireDefault(_vanishOut);

var _rainbow = require('./rainbow');

var _rainbow2 = _interopRequireDefault(_rainbow);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  boingInUp: _boingInUp2.default,
  boingOutDown: _boingOutDown2.default,
  bombLeftOut: _bombLeftOut2.default,
  bombRightOut: _bombRightOut2.default,
  foolishIn: _foolishIn2.default,
  foolishOut: _foolishOut2.default,
  holeOut: _holeOut2.default,
  magic: _magic2.default,
  openDownLeft: _openDownLeft2.default,
  openDownLeftOut: _openDownLeftOut2.default,
  openDownLeftRetourn: _openDownLeftRetourn2.default,
  openDownRight: _openDownRight2.default,
  openDownRightOut: _openDownRightOut2.default,
  openDownRightRetourn: _openDownRightRetourn2.default,
  openUpLeft: _openUpLeft2.default,
  openUpLeftOut: _openUpLeftOut2.default,
  openUpLeftRetourn: _openUpLeftRetourn2.default,
  openUpRight: _openUpRight2.default,
  openUpRightOut: _openUpRightOut2.default,
  openUpRightRetourn: _openUpRightRetourn2.default,
  perspectiveDown: _perspectiveDown2.default,
  perspectiveDownRetourn: _perspectiveDownRetourn2.default,
  perspectiveLeft: _perspectiveLeft2.default,
  perspectiveLeftRetourn: _perspectiveLeftRetourn2.default,
  perspectiveRight: _perspectiveRight2.default,
  perspectiveRightRetourn: _perspectiveRightRetourn2.default,
  perspectiveUp: _perspectiveUp2.default,
  perspectiveUpRetourn: _perspectiveUpRetourn2.default,
  puffIn: _puffIn2.default,
  puffOut: _puffOut2.default,
  rotateDown: _rotateDown2.default,
  rotateLeft: _rotateLeft2.default,
  rotateRight: _rotateRight2.default,
  rotateUp: _rotateUp2.default,
  scaleIn: _scaleIn2.default,
  scaleOut: _scaleOut2.default,
  slideDown: _slideDown2.default,
  slideDownRetourn: _slideDownRetourn2.default,
  slideLeft: _slideLeft2.default,
  slideLeftRetourn: _slideLeftRetourn2.default,
  slideRight: _slideRight2.default,
  slideRightRetourn: _slideRightRetourn2.default,
  slideUp: _slideUp2.default,
  slideUpRetourn: _slideUpRetourn2.default,
  spaceInDown: _spaceInDown2.default,
  spaceInLeft: _spaceInLeft2.default,
  spaceInRight: _spaceInRight2.default,
  spaceInUp: _spaceInUp2.default,
  spaceOutDown: _spaceOutDown2.default,
  spaceOutLeft: _spaceOutLeft2.default,
  spaceOutRight: _spaceOutRight2.default,
  spaceOutUp: _spaceOutUp2.default,
  swap: _swap2.default,
  swashIn: _swashIn2.default,
  swashOut: _swashOut2.default,
  tinDownIn: _tinDownIn2.default,
  tinDownOut: _tinDownOut2.default,
  tinLeftIn: _tinLeftIn2.default,
  tinLeftOut: _tinLeftOut2.default,
  tinRightIn: _tinRightIn2.default,
  tinRightOut: _tinRightOut2.default,
  tinUpIn: _tinUpIn2.default,
  tinUpOut: _tinUpOut2.default,
  twisterInDown: _twisterInDown2.default,
  twisterInUp: _twisterInUp2.default,
  vanishIn: _vanishIn2.default,
  vanishOut: _vanishOut2.default,

  rainbow: _rainbow2.default,
  utils: _utils2.default
};