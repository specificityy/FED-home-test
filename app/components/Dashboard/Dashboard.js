"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./dashboard.scss");

var _fetch = require("../../utils/fetch");

var _bem = _interopRequireDefault(require("../../utils/bem"));

var _ScoreIndicator = _interopRequireDefault(require("../ScoreIndicator/ScoreIndicator"));

var _NewOffers = _interopRequireDefault(require("../NewOffers/NewOffers"));

var _LongTermDebt = _interopRequireDefault(require("../LongTermDebt/LongTermDebt"));

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
  block: "content"
});
/**
 * This component is also the carousel despite its name
 */

var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this, props));
    _this.state = {
      slide: 0,
      creditReport: {
        creditReportInfo: {}
      }
    };
    _this.setCreditReport = _this.setCreditReport.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.goToSlide = _this.goToSlide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.classNameFor = _this.classNameFor.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _fetch.getJSON)("//s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json").then(this.setCreditReport);
    }
  }, {
    key: "setCreditReport",
    value: function setCreditReport(creditReport) {
      this.setState({
        creditReport: creditReport
      });
    }
    /**
     * The slides entrances and exits are handled through CSS based on the .active class
     */

  }, {
    key: "classNameFor",
    value: function classNameFor(element, index) {
      return this.state.slide === index ? element + " active" : element;
    }
  }, {
    key: "goToSlide",
    value: function goToSlide(slide) {
      var _this2 = this;

      return function () {
        return _this2.setState({
          slide: slide
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: cn("dashboard") + " slider"
      }, _react.default.createElement("div", {
        className: this.classNameFor("slide", 0)
      }, _react.default.createElement(_ScoreIndicator.default, {
        creditReport: this.state.creditReport.creditReportInfo
      }), _react.default.createElement(_NewOffers.default, null)), _react.default.createElement("div", {
        className: this.classNameFor("slide", 1)
      }, _react.default.createElement(_LongTermDebt.default, {
        creditReport: this.state.creditReport.creditReportInfo
      })), _react.default.createElement("div", {
        className: "dots"
      }, _react.default.createElement("span", {
        className: this.classNameFor("dot", 0),
        onClick: this.goToSlide(0)
      }), _react.default.createElement("span", {
        className: this.classNameFor("dot", 1),
        onClick: this.goToSlide(1)
      })));
    }
  }]);

  _inherits(Dashboard, _React$Component);

  return Dashboard;
}(_react.default.Component);

var _default = Dashboard;
exports.default = _default;
module.exports = exports["default"];