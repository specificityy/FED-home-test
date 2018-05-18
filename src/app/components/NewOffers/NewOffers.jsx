import React from "react";

import "./newOffers.scss";
import bemHelper from "../../utils/bem";

const cn = bemHelper({ block: "new-offers" });

class NewOffers extends React.Component {
  render() {
    return (
      <div className={cn() + " frosted-glass"}>
        <div className={cn("value")}>5</div>
        <div>New offers</div>
      </div>
    );
  }
}

export default NewOffers;
