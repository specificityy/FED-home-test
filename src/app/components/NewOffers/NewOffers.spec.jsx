import React from "react";
import { shallow } from "enzyme";

import NewOffers from "./NewOffers";

describe("NewOffers Component", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NewOffers />)));

  it("should render without throwing an error", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

const creditReport = {
  currentValue: ".score-indicator__current-value",
  max: ".score-indicator__max",
  desc: ".score-indicator__desc"
};
