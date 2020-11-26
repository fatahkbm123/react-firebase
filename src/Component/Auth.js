import React from "react";
import { connect } from "react-redux";
import { Error } from "../Message/Error";
import { Success } from "../Message/Success";
import Button from "./Button";
import { Header } from "./Header";
import { ImgThumbnail } from "./ImgThumbnail";
import LinkComponent from "./LinkComponent";

const Auth = (props) => {
  const {
    error,
    success,
    isLoading,
    logo,
    onSubmit,
    title,
    email,
    password,
    onChange,
    subTitle,
    Title,
    link,
    buttonTitle,
  } = props;

  return (
    <div className="Container">
      <div className="Content">
        <ImgThumbnail logo={logo} />
        <div className="form">
          <Header title={title} />
          <Success success={success} />
          <form onSubmit={onSubmit}>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                className={error ? "danger" : ""}
                id="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={onChange}
              />
              <Error error={error} message="Check your email" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                className={error ? "danger" : ""}
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={onChange}
              />
              <Error error={error} message="Check your password" />
            </div>
            <div className="button">
              <Button title={buttonTitle} isLoading={isLoading} />
            </div>
          </form>

          <LinkComponent title={Title} link={link} subTitle={subTitle} />
        </div>
      </div>
    </div>
  );
};

const stateRedux = (state) => {
  return {
    success: state.success,
    error: state.error,
    isLoading: state.isLoading,
  };
};

export default connect(stateRedux)(Auth);
