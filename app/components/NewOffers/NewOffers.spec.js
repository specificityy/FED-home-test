"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _NewOffers = _interopRequireDefault(require("./NewOffers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("NewOffers Component", function () {
  var wrapper;
  beforeEach(function () {
    return wrapper = (0, _enzyme.shallow)(_react.default.createElement(_NewOffers.default, null));
  });
  it("should render without throwing an error", function () {
    expect(wrapper.exists()).toBe(true);
  });
});
var creditReport = {
  currentValue: ".score-indicator__current-value",
  max: ".score-indicator__max",
  desc: ".score-indicator__desc"
};