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
  createKeyFrameBounceAnimation(score, maxScoreValue);

  return (
    <svg width="340" height="340">
      <circle
        cx="170"
        cy="170"
        r="159"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1000"
        strokeDashoffset="1000"
      />
    </svg>
  );
};

/*
 adding the keyframes animation here cause needed to know the stop value for dashOffset,
 which is calculated using the score and maxScore
 */
const createKeyFrameBounceAnimation = (score, maxScoreValue) => {
  // final value of the dashOffset, where the animation will stop,
  // which is the difference between the max and the score and then
  // the ratio of that percentage value to 1k (1k being the complete length of the arc)
  const offset = (maxScoreValue - score) / maxScoreValue * 1000 || 0;

  if (offset === 0 || typeof document === "undefined") return;

  // making sure this fn runs only once
  if (createKeyFrameBounceAnimation.wasCalled) return;

  createKeyFrameBounceAnimation.wasCalled = true;

  const style = document.createElement("style");
  style.type = "text/css";

  style.innerHTML = `@keyframes bounce {
    50% {
      animation-timing-function: ease-in-out;
      stroke-dashoffset: ${offset};
    }
    60% {
      stroke-dashoffset: ${offset * 1.3};
    }
    70% {
      stroke-dashoffset: ${offset};
    }
    80% {
      stroke-dashoffset: ${offset * 1.15};
    }
    85% {
      stroke-dashoffset: ${offset};
    }
    90% {
      stroke-dashoffset: ${offset * 1.05};
    }
    100% {
      stroke-dashoffset: ${offset};
    }
  }`;

  document.getElementsByTagName("head")[0].appendChild(style);
};

ScoreIndicator.propTypes = {
  creditReport: PropTypes.object.isRequired
};

export default ScoreIndicator;
