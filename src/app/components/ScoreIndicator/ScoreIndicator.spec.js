import React from "react";
import { shallow } from "enzyme";

import ScoreIndicator from "./ScoreIndicator";

describe("ScoreIndicator Component", () => {
  let wrapper;
  beforeEach(() =>
    (wrapper = shallow(
      <ScoreIndicator
        creditReport={{
          score: 500,
          maxScoreValue: 700,
          equifaxScoreBandDescription: "foo"
        }}
      />
    )));

  it("should render data correctly", () => {
    const { currentValue, max, desc } = creditReport;
    expect(wrapper.find(currentValue).text()).toBe("500");
    expect(wrapper.find(max).text()).toBe("700");
    expect(wrapper.find(desc).text()).toBe("foo");
  });

  it("should render the svg arc", () => {
    expect(wrapper.find("svg circle").props().strokeDasharray).toBeCloseTo(
      714.29,
      2
    );
  });
});

const creditReport = {
  currentValue: ".score-indicator__current-value",
  max: ".score-indicator__max",
  desc: ".score-indicator__desc"
};
