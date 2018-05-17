import React from "react";
import PropTypes from "prop-types";

import "./scoreIndicator.scss";
import bemHelper from "../../utils/bem";
// import CircularCard from "../CircularCard/CircularCard";

const cn = bemHelper({ block: "score-indicator" });

class ScoreIndicator extends React.Component {
  render() {
    const { score, maxScoreValue, equifaxScoreBandDescription } =
      this.props.creditReport || {};

    return (
      <div className={cn()}>
        <div>Your credit score is</div>
        <div className={cn("current-value")}>{score}</div>
        <div>
          out of <strong className={cn("max")}>{maxScoreValue}</strong>
        </div>
        <div className={cn("desc")}>{equifaxScoreBandDescription}</div>
      </div>
    );
  }
}

ScoreIndicator.propTypes = {
  creditReport: PropTypes.object.isRequired
};

export default ScoreIndicator;
