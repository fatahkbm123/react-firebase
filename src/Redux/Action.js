import { auth } from "../Config/Firebase";

export const signUpToFirebase = (data) => (dispatch) => {
  const { email, password } = data;

  if (email.length > 0 && password.length > 0) {
    // Button
    dispatch({ type: "SET_ISLOADING", value: true });
  } else {
    // Error
    dispatch({ type: "SET_ERROR", value: true });
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      // Button
      dispatch({ type: "SET_ISLOADING", value: false });

      // Message Success
      dispatch({ type: "SET_SUCCESS", value: true });

      setTimeout(() => {
        dispatch({ type: "SET_SUCCESS", value: false });
      }, 5000);
    })
    .catch(function (error) {
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
      // Button
      dispatch({ type: "SET_ISLOADING", value: false });
    });
};

export const loginToFirebase = (data) => (dispatch) => {
  const { email, password } = data;

  if (email.length > 0 && password.length > 0) {
    // Button
    dispatch({ type: "SET_ISLOADING", value: true });
  } else {
    // Error
    dispatch({ type: "SET_ERROR", value: true });
  }

  return new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        const data = {
          uid: res.user.uid,
          email: res.user.email,
          emailVerified: res.user.emailVerified,
        };

        dispatch({ type: "SET_ISLOADING", value: false });
        dispatch({ type: "SET_USER", value: data });
        resolve(true);
      })
      .catch(function (error) {
        reject(error);

        dispatch({ type: "SET_ISLOADING", value: false });
      });
  });
};
