import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({ title, link, subTitle }) => {
  return (
    <p className="hrefLogin">
      {subTitle} have account? <Link to={link}>{title}</Link>
    </p>
  );
};

export default LinkComponent;
