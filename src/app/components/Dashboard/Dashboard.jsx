import React from "react";

import "./dashboard.scss";
import { getJSON } from "../../utils/fetch";
import bemHelper from "../../utils/bem";
import ScoreIndicator from "../ScoreIndicator/ScoreIndicator";

const cn = bemHelper({ block: "content" });

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creditReport: { creditReportInfo: {} } };
    this.setCreditReport = this.setCreditReport.bind(this);
  }

  componentDidMount() {
    getJSON(
      "//s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json"
    ).then(this.setCreditReport);
  }

  setCreditReport(creditReport) {
    this.setState({ creditReport });
  }

  render() {
    return (
      <div className={cn("dashboard")}>
        <ScoreIndicator
          creditReport={this.state.creditReport.creditReportInfo}
        />
      </div>
    );
  }
}

export default Dashboard;
