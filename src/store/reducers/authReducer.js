const initState = {
  authError: null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return { ...state, authError: "Login Failed" };
    case "LOGIN_SUCCESS":
      return { ...state, authError: null };
    case "SIGNOUT_SUCCESS":
      return state;

    case "SIGNUP_SUCCESS":
      console.log("Signup success");
      return { ...state, authError: null };
    case "SIGNUP_FAIL":
      console.log(action.payload);
      return { ...state, authError: action.payload.message };
    default:
      return state;
  }
};

export default authReducer;
