import React from "react";
import { shallow } from "enzyme";

import Dashboard from "./Dashboard";
import ScoreIndicator from "../ScoreIndicator/ScoreIndicator";
import { getJSON } from "../../utils/fetch";

const mockData = { creditReportInfo: { score: 42 } };

jest.mock("../../utils/fetch", () => ({
  getJSON: jest.fn(() => ({
    then: callback => callback(mockData)
  }))
}));

describe("Dashboard Component", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Dashboard />)));

  it("should render without throwing an error", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.contains(<ScoreIndicator creditReport={{}} />)).toBe(false);
  });

  it("should fetch credit report and set state on init", () => {
    expect(getJSON.mock.calls[0][0]).toMatch(/creditReportInfo.json/);
    expect(wrapper.state("creditReport")).toBe(mockData);
  });
});
