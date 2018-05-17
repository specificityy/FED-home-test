import React from "react";
import { shallow } from "enzyme";

import Dashboard from "./Dashboard";
import ScoreIndicator from "../ScoreIndicator/ScoreIndicator";
import NewOffers from "../NewOffers/NewOffers";
import LongTermDebt from "../LongTermDebt/LongTermDebt";
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
  });

  it("should render child components", () => {
    expect(wrapper.find(ScoreIndicator).length).toBe(1);
    expect(wrapper.find(NewOffers).length).toBe(1);
    expect(wrapper.find(LongTermDebt).length).toBe(1);
  });

  it("should fetch credit report and set state on init", () => {
    expect(fetchedCreditReportInfoUrl()).toMatch(/creditReportInfo.json/);
    expect(wrapper.state("creditReport")).toBe(mockData);
  });

  it("switches slides", () => {
    clickLastDot(wrapper);
    expect(wrapper.state("slide")).toBe(1);
    expect(isLastSlideActive(wrapper)).toBe(true);
    expect(isLastDotActive(wrapper)).toBe(true);
  });
});

///////

const fetchedCreditReportInfoUrl = () => getJSON.mock.calls[0][0];
const isLastSlideActive = wrapper => isLastActive(".slider .slide", wrapper);
const isLastDotActive = wrapper => isLastActive(".dots .dot", wrapper);

const isLastActive = (selector, wrapper) =>
  wrapper
    .find(selector)
    .last()
    .is(".active");

const clickLastDot = wrapper =>
  wrapper
    .find(".dots .dot")
    .last()
    .simulate("click");
