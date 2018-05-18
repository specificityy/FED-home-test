import React from "react";
import PropTypes from "prop-types";

import "./scoreIndicator.scss";
import bemHelper from "../../utils/bem";

const cn = bemHelper({ block: "score-indicator" });

class ScoreIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.incrementScore = this.incrementScore.bind(this);
  }

  componentWillReceiveProps(props) {
    this.incrementScore(props);
  }

  incrementScore(props) {
    props = props || this.props;
    if (this.state.score >= props.creditReport.score) return;

    setTimeout(_ =>
      this.setState({ score: this.state.score + 1 }, this.incrementScore)
    );
  }

  render() {
    const {
      score,
      maxScoreValue,
      equifaxScoreBandDescription
    } = this.props.creditReport;

    return (
      <div className={cn() + " frosted-glass"}>
        <div>Your credit score is</div>
        <div className={cn("current-value")}>{this.state.score}</div>
        <div>
          out of <strong className={cn("max")}>{maxScoreValue}</strong>
        </div>
        <div className={cn("desc")}>{equifaxScoreBandDescription}</div>
        {renderInnerArc(score, maxScoreValue)}
      </div>
    );
  }
}

const renderInnerArc = (score, maxScoreValue) => {
  const arcLength = score / maxScoreValue * 1000;
  return (
    <svg viewBox="0 0 340 340" width="340" height="340">
      <circle
        cx="170"
        cy="170"
        r="159"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={arcLength || 0}
      />
    </svg>
  );
};

ScoreIndicator.propTypes = {
  creditReport: PropTypes.object.isRequired
};

export default ScoreIndicator;
