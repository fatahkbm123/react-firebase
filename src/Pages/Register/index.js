import React, { Component } from "react";
import logoRegister from "../../asset/img/logoRegister.svg";
import { connect } from "react-redux";
import { signUpToFirebase } from "../../Redux/Action";
import Auth from "../../Component/Auth";
import "../../asset/css/RegisterStyle/index.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signUpUser } = this.props;

    signUpUser({ email, password });

    this.setState({
      email: "",
      password: "",
    });
  };

  componentDidMount() {
    document.title = "Sign Up";
  }

  componentWillUnmount() {
    this.props.defaultError();
    document.title = "React App";
  }

  render() {
    const { email, password } = this.state;
    const { handleRegisterSubmit, handleChange } = this;

    return (
      <Auth
        logo={logoRegister}
        onSubmit={handleRegisterSubmit}
        email={email}
        password={password}
        onChange={handleChange}
        title="sign up"
        Title="Login"
        link="/"
        buttonTitle="Register"
        subTitle="Already"
      />
    );
  }
}

const stateRedux = (state) => {
  return {
    isLoading: state.isLoading,
    error: state.error,
  };
};

const dispatchRedux = (dispacth) => {
  return {
    signUpUser: (data) => dispacth(signUpToFirebase(data)),
    defaultError: () => dispacth({ type: "SET_ERROR", value: false }),
  };
};

export default connect(stateRedux, dispatchRedux)(Register);
