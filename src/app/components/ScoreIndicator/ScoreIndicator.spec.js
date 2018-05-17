import React from "react";
import { shallow } from "enzyme";

import ScoreIndicator from "./ScoreIndicator";

describe("ScoreIndicator Component", () => {
  let wrapper;
  beforeEach(() =>
    (wrapper = shallow(
      <ScoreIndicator
        creditReport={{
          score: 42,
          maxScoreValue: 43,
          equifaxScoreBandDescription: "foo"
        }}
      />
    )));

  it("should render data correctly", () => {
    const { currentValue, max, desc } = creditReport;
    expect(wrapper.find(currentValue).text()).toBe("42");
    expect(wrapper.find(max).text()).toBe("43");
    expect(wrapper.find(desc).text()).toBe("foo");
  });
});

const creditReport = {
  currentValue: ".score-indicator__current-value",
  max: ".score-indicator__max",
  desc: ".score-indicator__desc"
};
