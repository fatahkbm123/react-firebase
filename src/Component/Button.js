import React from "react";

const Button = ({ title, isLoading }) => {
  if (isLoading) return <button className="loading">Loading...</button>;
  return <button className="btn">{title}</button>;
};

export default Button;
