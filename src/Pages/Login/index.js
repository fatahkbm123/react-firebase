import React, { Component } from "react";
import Auth from "../../Component/Auth";
import logoLogin from "../../asset/img/logoLogin.svg";
import { connect } from "react-redux";
import { loginToFirebase } from "../../Redux/Action";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { loginUser, history } = this.props;
    const { email, password } = this.state;
    const user = await loginUser({ email, password }).catch((err) =>
      console.error(err)
    );

    if (user) {
      history.push("/Dashboard");
    }
  };

  componentDidMount() {
    document.title = "Login Page";
  }

  componentWillUnmount() {
    this.props.defaultError();
    document.title = "React App";
  }

  render() {
    const { email, password } = this.state;
    const { handleChange, handleLoginSubmit } = this;
    return (
      <Auth
        logo={logoLogin}
        onSubmit={handleLoginSubmit}
        email={email}
        password={password}
        onChange={handleChange}
        buttonTitle="Login"
        title="sign in"
        Title="Sign up"
        subTitle="Dont"
        link="/Register"
      />
    );
  }
}

const dispatchRedux = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginToFirebase(data)),
    defaultError: () => dispatch({ type: "SET_ERROR", value: false }),
  };
};

export default connect(null, dispatchRedux)(withRouter(Login));
