"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./scoreIndicator.scss");

var _bem = _interopRequireDefault(require("../../utils/bem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var cn = (0, _bem.default)({
  block: "score-indicator"
});

var ScoreIndicator =
/*#__PURE__*/
function (_React$Component) {
  function ScoreIndicator(props) {
    var _this;

    _classCallCheck(this, ScoreIndicator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScoreIndicator).call(this, props));
    _this.state = {
      score: 0
    };
    _this.incrementScore = _this.incrementScore.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ScoreIndicator, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.incrementScore(props);
    } // This creates a counter animation on the score, by updating the state each time

  }, {
    key: "incrementScore",
    value: function incrementScore(props) {
      var _this2 = this;

      props = props || this.props;
      if (this.state.score >= props.creditReport.score) return;
      var nextValue = Math.min(this.state.score + 3, props.creditReport.score);
      setTimeout(function (_) {
        return _this2.setState({
          score: nextValue
        }, _this2.incrementScore);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$creditRep = this.props.creditReport,
          score = _this$props$creditRep.score,
          maxScoreValue = _this$props$creditRep.maxScoreValue,
          equifaxScoreBandDescription = _this$props$creditRep.equifaxScoreBandDescription;
      return _react.default.createElement("div", {
        className: cn() + " frosted-glass"
      }, _react.default.createElement("div", null, "Your credit score is"), _react.default.createElement("div", {
        className: cn("current-value")
      }, this.state.score), _react.default.createElement("div", null, "out of ", _react.default.createElement("strong", {
        className: cn("max")
      }, maxScoreValue)), _react.default.createElement("div", {
        className: cn("desc")
      }, equifaxScoreBandDescription), renderInnerArc(score, maxScoreValue));
    }
  }]);

  _inherits(ScoreIndicator, _React$Component);

  return ScoreIndicator;
}(_react.default.Component);

var renderInnerArc = function renderInnerArc(score, maxScoreValue) {
  createKeyFrameBounceAnimation(score, maxScoreValue);
  return _react.default.createElement("svg", {
    width: "340",
    height: "340"
  }, _react.default.createElement("circle", {
    cx: "170",
    cy: "170",
    r: "159",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeDasharray: "1000",
    strokeDashoffset: "1000"
  }));
};
/*
 adding the keyframes animation here cause needed to know the stop value for dashOffset,
 which is calculated using the score and maxScore
 */


var createKeyFrameBounceAnimation = function createKeyFrameBounceAnimation(score, maxScoreValue) {
  // final value of the dashOffset, where the animation will stop,
  // which is the difference between the max and the score and then
  // the ratio of that percentage value to 1k (1k being the complete length of the arc)
  var offset = (maxScoreValue - score) / maxScoreValue * 1000 || 0;
  if (offset === 0 || typeof document === "undefined") return; // making sure this fn runs only once

  if (createKeyFrameBounceAnimation.wasCalled) return;
  createKeyFrameBounceAnimation.wasCalled = true;
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = "@keyframes bounce {\n    50% {\n      animation-timing-function: ease-in-out;\n      stroke-dashoffset: ".concat(offset, ";\n    }\n    60% {\n      stroke-dashoffset: ").concat(offset * 1.3, ";\n    }\n    70% {\n      stroke-dashoffset: ").concat(offset, ";\n    }\n    80% {\n      stroke-dashoffset: ").concat(offset * 1.15, ";\n    }\n    85% {\n      stroke-dashoffset: ").concat(offset, ";\n    }\n    90% {\n      stroke-dashoffset: ").concat(offset * 1.05, ";\n    }\n    100% {\n      stroke-dashoffset: ").concat(offset, ";\n    }\n  }");
  document.getElementsByTagName("head")[0].appendChild(style);
};

ScoreIndicator.propTypes = {
  creditReport: _propTypes.default.object.isRequired
};
var _default = ScoreIndicator;
exports.default = _default;
module.exports = exports["default"];