"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ScoreIndicator = _interopRequireDefault(require("./ScoreIndicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("ScoreIndicator Component", function () {
  var wrapper;
  var mockData = {
    score: 500,
    maxScoreValue: 700,
    equifaxScoreBandDescription: "foo"
  };
  beforeEach(function () {
    jest.useFakeTimers();
    wrapper = (0, _enzyme.mount)(_react.default.createElement(_ScoreIndicator.default, {
      creditReport: mockData
    }));
  });
  it("should render data correctly", function () {
    var currentValue = creditReport.currentValue,
        max = creditReport.max,
        desc = creditReport.desc;
    expect(wrapper.find(max).text()).toBe("700");
    expect(wrapper.find(desc).text()).toBe("foo"); // need to assert this after the timeouts cause the final value is animated

    wrapper.instance().incrementScore({
      creditReport: mockData
    });
    setTimeout(function () {
      return expect(wrapper.find(creditReport.currentValue).text()).toBe("500");
    }, 2000);
    jest.runAllTimers();
  });
  it("should render the svg arc", function () {
    expect(wrapper.find("svg circle").exists()).toBe(true);
  });
  it("should append a style tag with a bounce animation to the document head", function () {
    expect(document.getElementsByTagName("head")[0].getElementsByTagName("style")[0].innerHTML).toMatch(/^@keyframes bounce*/);
  });
});
var creditReport = {
  currentValue: ".score-indicator__current-value",
  max: ".score-indicator__max",
  desc: ".score-indicator__desc"
};