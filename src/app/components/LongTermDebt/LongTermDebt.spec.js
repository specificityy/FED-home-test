import React from "react";
import { shallow } from "enzyme";

import LongTermDebt from "./LongTermDebt";

describe("LongTermDebt Component", () => {
  let wrapper;
  beforeEach(() =>
    (wrapper = shallow(
      <LongTermDebt
        creditReport={{
          currentLongTermDebt: 42,
          currentLongTermCreditLimit: 2,
          currentLongTermCreditUtilisation: 1
        }}
      />
    )));

  it("should render data correctly", () => {
    const { currentValue, creditLimit, noChange } = creditReport;
    expect(wrapper.find(currentValue).text()).toBe("£42");
    expect(wrapper.find(creditLimit).text()).toMatch(/1$/);
  });
});

const creditReport = {
  currentValue: ".long-term-debt__current-value",
  creditLimit: ".long-term-debt__credit-limit"
};
