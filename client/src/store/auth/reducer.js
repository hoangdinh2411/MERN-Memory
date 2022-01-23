import authActions from "./constants";
const initialState = {
  authData: null,
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActions.SIGN_IN:
      localStorage.setItem("profile", JSON.stringify({ ...payload }));
      return {
        ...state,
        authData: payload,
      }
    case authActions.SIGN_OUT:
      localStorage.clear();
      return {
        ...state,
        authData: null,
      }

    default:
      return state;
  }
};

export default authReducer;
