import React, { Fragment } from "react";

export const Success = (props) => {
  return (
    <Fragment>
      {props.success ? (
        <div className="success">
          <p>Success!</p>
        </div>
      ) : null}
    </Fragment>
  );
};
