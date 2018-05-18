import React from "react";

import "./dashboard.scss";
import { getJSON } from "../../utils/fetch";
import bemHelper from "../../utils/bem";
import ScoreIndicator from "../ScoreIndicator/ScoreIndicator";
import NewOffers from "../NewOffers/NewOffers";
import LongTermDebt from "../LongTermDebt/LongTermDebt";

const cn = bemHelper({ block: "content" });

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slide: 0, creditReport: { creditReportInfo: {} } };
    this.setCreditReport = this.setCreditReport.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
    this.classNameFor = this.classNameFor.bind(this);
  }

  componentDidMount() {
    getJSON(
      "//s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json"
    ).then(this.setCreditReport);
  }

  setCreditReport(creditReport) {
    this.setState({ creditReport });
  }

  classNameFor(element, index) {
    return this.state.slide === index ? element + " active" : element;
  }

  goToSlide(slide) {
    return () => this.setState({ slide });
  }

  render() {
    return (
      <div className={cn("dashboard") + " slider"}>
        <div className={this.classNameFor("slide", 0)}>
          <ScoreIndicator
            creditReport={this.state.creditReport.creditReportInfo}
          />
          <NewOffers />
        </div>
        <div className={this.classNameFor("slide", 1)}>
          <LongTermDebt
            creditReport={this.state.creditReport.creditReportInfo}
          />
        </div>
        <div className="dots">
          <span
            className={this.classNameFor("dot", 0)}
            onClick={this.goToSlide(0)}
          />
          <span
            className={this.classNameFor("dot", 1)}
            onClick={this.goToSlide(1)}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
