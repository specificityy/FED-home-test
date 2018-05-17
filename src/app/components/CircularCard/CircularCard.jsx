import React from "react";
import PropTypes from "prop-types";

import "./circularCard.scss";
import bemHelper from "../../utils/bem";

const cn = bemHelper({ block: "circular-card" });

const CircularCard = ({ children }) => {
  return <div className={cn()}>{children}</div>;
};

CircularCard.propTypes = {
  children: PropTypes.element.isRequired
};

export default CircularCard;
