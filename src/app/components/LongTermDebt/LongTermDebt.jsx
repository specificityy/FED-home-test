import React from "react";
import PropTypes from "prop-types";

import "./longTermDebt.scss";
import bemHelper from "../../utils/bem";

const cn = bemHelper({ block: "long-term-debt" });

/**
 * I wasn't sure how to gather some of the data for this component,
 * like the no-change-since-last-month, so tried to do my best of
 * figuring some stuff out.
 */
class LongTermDebt extends React.Component {
  render() {
    const { currentLongTermDebt, ...report } = this.props.creditReport;

    return (
      <div className={cn() + " frosted-glass"}>
        <div>Your long term debt total</div>
        <div className={cn("current-value")}>
          £{formatCurrency(currentLongTermDebt)}
        </div>
        <div className={cn("credit-limit")}>
          Total credit limit {totalCreditLimit(report)}
        </div>
        <div className={cn("no-change")}>No change since last month</div>
      </div>
    );
  }
}

// simple function to add commas to the amounts
const formatCurrency = (amount = 0) =>
  amount
    .toString()
    .split("")
    .reverse()
    .reduce((acc, next, i) => (i % 3 === 0 ? next + "," + acc : next + acc));

// I've made the assumption that this is the right way of calculating the total credit
const totalCreditLimit = ({
  currentLongTermCreditLimit = 0,
  currentLongTermCreditUtilisation = 0,
  currentShortTermCreditLimit = 0,
  currentShortTermCreditUtilisation = 0
}) => {
  return formatCurrency(
    currentLongTermCreditLimit -
      currentLongTermCreditUtilisation +
      currentShortTermCreditLimit -
      currentShortTermCreditUtilisation
  );
};

LongTermDebt.propTypes = {
  creditReport: PropTypes.object.isRequired
};

export default LongTermDebt;
