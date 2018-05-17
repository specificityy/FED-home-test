import React from "react";
import PropTypes from "prop-types";

import "./newOffers.scss";
import bemHelper from "../../utils/bem";
// import CircularCard from "../CircularCard/CircularCard";

const cn = bemHelper({ block: "new-offers" });

class NewOffers extends React.Component {
  render() {
    return (
      <div className={cn()}>
        <div className={cn("value")}>5</div>
        <div>New offers</div>
      </div>
    );
  }
}

export default NewOffers;
