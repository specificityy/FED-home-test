"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _LongTermDebt = _interopRequireDefault(require("./LongTermDebt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("LongTermDebt Component", function () {
  var wrapper;
  beforeEach(function () {
    return wrapper = (0, _enzyme.shallow)(_react.default.createElement(_LongTermDebt.default, {
      creditReport: {
        currentLongTermDebt: 42000000,
        currentLongTermCreditLimit: 3000,
        currentLongTermCreditUtilisation: 1000
      }
    }));
  });
  it("should render data correctly", function () {
    var currentValue = creditReport.currentValue,
        creditLimit = creditReport.creditLimit,
        noChange = creditReport.noChange;
    expect(wrapper.find(currentValue).text()).toBe("£42,000,000");
    expect(wrapper.find(creditLimit).text()).toMatch(/2,000$/);
  });
});
var creditReport = {
  currentValue: ".long-term-debt__current-value",
  creditLimit: ".long-term-debt__credit-limit"
};