import authAPI from "api/authAPI";
import {  signIn } from "./actions";

export const signUpMiddleware = (formData, navigate) => {
  return (dispatch) => {
    return authAPI
      .signUp(formData)
      .then((data) => {
        dispatch(signIn(data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const signInMiddleware = (formData, navigate) => {
  return (dispatch) => {
    return authAPI
      .signIn(formData)
      .then((data) => {
        console.log(data)
        dispatch(signIn(data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
