"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Dashboard = _interopRequireDefault(require("./Dashboard"));

var _ScoreIndicator = _interopRequireDefault(require("../ScoreIndicator/ScoreIndicator"));

var _NewOffers = _interopRequireDefault(require("../NewOffers/NewOffers"));

var _LongTermDebt = _interopRequireDefault(require("../LongTermDebt/LongTermDebt"));

var _fetch = require("../../utils/fetch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockData = {
  creditReportInfo: {
    score: 42
  }
};
jest.mock("../../utils/fetch", function () {
  return {
    getJSON: jest.fn(function () {
      return {
        then: function then(callback) {
          return callback(mockData);
        }
      };
    })
  };
});
describe("Dashboard Component", function () {
  var wrapper;
  beforeEach(function () {
    return wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Dashboard.default, null));
  });
  it("should render without throwing an error", function () {
    expect(wrapper.exists()).toBe(true);
  });
  it("should render child components", function () {
    expect(wrapper.find(_ScoreIndicator.default).length).toBe(1);
    expect(wrapper.find(_NewOffers.default).length).toBe(1);
    expect(wrapper.find(_LongTermDebt.default).length).toBe(1);
  });
  it("should fetch credit report and set state on init", function () {
    expect(fetchedCreditReportInfoUrl()).toMatch(/creditReportInfo.json/);
    expect(wrapper.state("creditReport")).toBe(mockData);
  });
  it("switches slides", function () {
    clickLastDot(wrapper);
    expect(wrapper.state("slide")).toBe(1);
    expect(isLastSlideActive(wrapper)).toBe(true);
    expect(isLastDotActive(wrapper)).toBe(true);
  });
}); ///////

var fetchedCreditReportInfoUrl = function fetchedCreditReportInfoUrl() {
  return _fetch.getJSON.mock.calls[0][0];
};

var isLastSlideActive = function isLastSlideActive(wrapper) {
  return isLastActive(".slider .slide", wrapper);
};

var isLastDotActive = function isLastDotActive(wrapper) {
  return isLastActive(".dots .dot", wrapper);
};

var isLastActive = function isLastActive(selector, wrapper) {
  return wrapper.find(selector).last().is(".active");
};

var clickLastDot = function clickLastDot(wrapper) {
  return wrapper.find(".dots .dot").last().simulate("click");
};