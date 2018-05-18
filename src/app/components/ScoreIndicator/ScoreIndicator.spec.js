import React from "react";
import { shallow, mount } from "enzyme";

import ScoreIndicator from "./ScoreIndicator";

describe("ScoreIndicator Component", () => {
  let wrapper;
  const mockData = {
    score: 500,
    maxScoreValue: 700,
    equifaxScoreBandDescription: "foo"
  };
  beforeEach(() => {
    jest.useFakeTimers();
    wrapper = mount(<ScoreIndicator creditReport={mockData} />);
  });

  it("should render data correctly", () => {
    const { currentValue, max, desc } = creditReport;
    expect(wrapper.find(max).text()).toBe("700");
    expect(wrapper.find(desc).text()).toBe("foo");

    wrapper.instance().incrementScore({ creditReport: mockData });
    setTimeout(
      () => expect(wrapper.find(creditReport.currentValue).text()).toBe("500"),
      2000
    );
    jest.runAllTimers();
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
