import React from "react";

export const Error = (props) => {
  return <small>{props.error ? props.message : null}</small>;
};
