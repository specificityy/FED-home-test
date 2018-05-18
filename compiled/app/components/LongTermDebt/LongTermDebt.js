"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./longTermDebt.scss");

var _bem = _interopRequireDefault(require("../../utils/bem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

var cn = (0, _bem.default)({
  block: "long-term-debt"
});
/**
 * I wasn't sure how to gather some of the data for this component,
 * like the no-change-since-last-month, so tried to do my best of
 * figuring some stuff out.
 */

var LongTermDebt =
/*#__PURE__*/
function (_React$Component) {
  function LongTermDebt() {
    _classCallCheck(this, LongTermDebt);

    return _possibleConstructorReturn(this, _getPrototypeOf(LongTermDebt).apply(this, arguments));
  }

  _createClass(LongTermDebt, [{
    key: "render",
    value: function render() {
      var _this$props$creditRep = this.props.creditReport,
          currentLongTermDebt = _this$props$creditRep.currentLongTermDebt,
          report = _objectWithoutProperties(_this$props$creditRep, ["currentLongTermDebt"]);

      return _react.default.createElement("div", {
        className: cn() + " frosted-glass"
      }, _react.default.createElement("div", null, "Your long term debt total"), _react.default.createElement("div", {
        className: cn("current-value")
      }, "\xA3", formatCurrency(currentLongTermDebt)), _react.default.createElement("div", {
        className: cn("credit-limit")
      }, "Total credit limit ", totalCreditLimit(report)), _react.default.createElement("div", {
        className: cn("no-change")
      }, "No change since last month"));
    }
  }]);

  _inherits(LongTermDebt, _React$Component);

  return LongTermDebt;
}(_react.default.Component); // simple function to add commas to the amounts


var formatCurrency = function formatCurrency() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return amount.toString().split("").reverse().reduce(function (acc, next, i) {
    return i % 3 === 0 ? next + "," + acc : next + acc;
  });
}; // I've made the assumption that this is the right way of calculating the total credit


var totalCreditLimit = function totalCreditLimit(_ref) {
  var _ref$currentLongTermC = _ref.currentLongTermCreditLimit,
      currentLongTermCreditLimit = _ref$currentLongTermC === void 0 ? 0 : _ref$currentLongTermC,
      _ref$currentLongTermC2 = _ref.currentLongTermCreditUtilisation,
      currentLongTermCreditUtilisation = _ref$currentLongTermC2 === void 0 ? 0 : _ref$currentLongTermC2,
      _ref$currentShortTerm = _ref.currentShortTermCreditLimit,
      currentShortTermCreditLimit = _ref$currentShortTerm === void 0 ? 0 : _ref$currentShortTerm,
      _ref$currentShortTerm2 = _ref.currentShortTermCreditUtilisation,
      currentShortTermCreditUtilisation = _ref$currentShortTerm2 === void 0 ? 0 : _ref$currentShortTerm2;
  return formatCurrency(currentLongTermCreditLimit - currentLongTermCreditUtilisation + currentShortTermCreditLimit - currentShortTermCreditUtilisation);
};

LongTermDebt.propTypes = {
  creditReport: _propTypes.default.object.isRequired
};
var _default = LongTermDebt;
exports.default = _default;
module.exports = exports["default"];