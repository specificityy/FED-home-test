import React from "react";
import { shallow } from "enzyme";

import CircularCard from "./CircularCard";

describe("CircularCard Component", () => {
  let wrapper;
  beforeEach(() =>
    (wrapper = shallow(
      <CircularCard children={[<div className="only-child" key="1" />]} />
    )));

  it("should render component correctly", () => {
    expect(wrapper.is(".circular-card")).toBe(true);
  });

  it("should render children correctly", () => {
    expect(wrapper.childAt(0).is(".only-child")).toBe(true);
  });
});
