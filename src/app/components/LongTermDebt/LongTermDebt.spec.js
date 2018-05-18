import React from "react";
import { shallow } from "enzyme";

import LongTermDebt from "./LongTermDebt";

describe("LongTermDebt Component", () => {
  let wrapper;
  beforeEach(() =>
    (wrapper = shallow(
      <LongTermDebt
        creditReport={{
          currentLongTermDebt: 42000000,
          currentLongTermCreditLimit: 3000,
          currentLongTermCreditUtilisation: 1000
        }}
      />
    )));

  it("should render data correctly", () => {
    const { currentValue, creditLimit, noChange } = creditReport;
    expect(wrapper.find(currentValue).text()).toBe("£42,000,000");
    expect(wrapper.find(creditLimit).text()).toMatch(/2,000$/);
  });
});

const creditReport = {
  currentValue: ".long-term-debt__current-value",
  creditLimit: ".long-term-debt__credit-limit"
};
