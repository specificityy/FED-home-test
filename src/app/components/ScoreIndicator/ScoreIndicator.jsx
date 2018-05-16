import React from "react";
import PropTypes from "prop-types";

import "./scoreIndicator.scss";
import bemHelper from "../../utils/bem";

class ScoreIndicator extends React.Component {
  render() {
    const cn = bemHelper({ block: this.props.block });
    const { score, maxScoreValue, equifaxScoreBandDescription } =
      this.props.creditReport || {};
    return (
      <div className={cn("score-indicator")}>
        <div>Your credit score is</div>
        <div>{score}</div>
        <div>
          out of <strong>{maxScoreValue}</strong>
        </div>
        <div>{equifaxScoreBandDescription}</div>
      </div>
    );
  }
}

ScoreIndicator.propTypes = {
  creditReport: PropTypes.object.isRequired
};

export default ScoreIndicator;
