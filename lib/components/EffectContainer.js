'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _performanceNow = require('performance-now');

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Effects = require('../Effects');

var _Effects2 = _interopRequireDefault(_Effects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BASE_STYLE = {
  WebkitAnimationDuration: '1s',
  animationDuration: '1s',
  WebkitAnimationFillMode: 'both',
  animationFillMode: 'both'
};

var EffectContainer = (function (_React$Component) {
  _inherits(EffectContainer, _React$Component);

  function EffectContainer(props) {
    _classCallCheck(this, EffectContainer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EffectContainer).call(this, props));

    _this.handle = null;
    return _this;
  }

  _createClass(EffectContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoPlay) {
        this.play();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoPlay) {
        this.play();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.handle) {
        _raf2.default.cancel(this.handle);
      }
    }
  }, {
    key: 'play',
    value: function play() {
      var _this2 = this;

      var target = _reactDom2.default.findDOMNode(this.refs.target);
      this.startTime = (0, _performanceNow2.default)();
      var _props = this.props;
      var duration = _props.duration;
      var effect = _props.effect;
      var loop = _props.loop;
      var onAnimationEnd = _props.onAnimationEnd;

      var frameLoop = function frameLoop() {
        var lastTime = (0, _performanceNow2.default)();
        var frame = Math.floor((lastTime - _this2.startTime) / (1000.0 / 60.0) % (60 * duration));
        var progress = Math.floor(frame / (60 * duration - 1) * 100);
        var style = effect(progress);
        if (progress >= 100 && !loop) {
          _this2._attachStyle(target, style, function () {
            _raf2.default.cancel(_this2.handle);
            _this2.handle = null;
            onAnimationEnd();
          });
        } else {
          _this2._attachStyle(target, style, function () {
            _this2.handle = (0, _raf2.default)(frameLoop);
          });
        }
      };
      this.handle = (0, _raf2.default)(frameLoop);
    }
  }, {
    key: 'stop',
    value: function stop() {
      if (this.handle) {
        _raf2.default.cancel(this.handle);
        this.handle = null;
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      var target = _reactDom2.default.findDOMNode(this.refs.target);
      var style = this.props.effect(0);
      this._attachStyle(target, style, function () {});
    }
  }, {
    key: '_attachStyle',
    value: function _attachStyle(node, style, cb) {
      for (var key in style) {
        node.style[key] = style[key];
      }
      cb();
    }

    // @TODO
    // pause() {
    // }
    // resume(){
    // }

  }, {
    key: 'render',
    value: function render() {
      var newStyle = (0, _merge2.default)(this.props.children.props.style, BASE_STYLE);
      return _react2.default.cloneElement(this.props.children, { ref: 'target', style: newStyle });;
    }
  }]);

  return EffectContainer;
})(_react2.default.Component);

EffectContainer.propTypes = {
  effect: _react2.default.PropTypes.func,
  duration: _react2.default.PropTypes.number,
  loop: _react2.default.PropTypes.bool,
  autoPlay: _react2.default.PropTypes.bool,
  onAnimationEnd: _react2.default.PropTypes.func
};

EffectContainer.defaultProps = {
  effect: _Effects2.default.magic,
  duration: 1,
  loop: false,
  autoPlay: true,
  onAnimationEnd: function onAnimationEnd() {}
};

exports.default = EffectContainer;