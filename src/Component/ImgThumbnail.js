import React from "react";

export const ImgThumbnail = ({ logo }) => {
  return (
    <div className="imgThumbnail">
      <img src={logo} alt="My Images" />
    </div>
  );
};
