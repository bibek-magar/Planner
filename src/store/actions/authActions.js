export const signIn = credentials => {
  return async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = getFirebase();
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);

      dispatch({ type: "LOGIN_SUCCESS" });
    } catch (err) {
      dispatch({ type: "LOGIN_ERROR", payload: err });
    }
  };
};

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    await firebase.auth().signOut();
    dispatch({ type: "SIGNOUT_SUCCESS" });
  };
};

export const signUp = ({ email, password, firstName, lastName }) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("signup action called");
    try {
      const firebase = getFirebase();
      const firestore = getFirestore();
      let response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await firestore
        .collection("users")
        .doc(response.user.uid)
        .set({
          firstName,
          lastName,
          initials: firstName[0] + lastName[0]
        });
      dispatch({ type: "SIGNUP_SUCCESS" });
    } catch (err) {
      dispatch({ type: "SIGNUP_FAIL", payload: err });
    }
  };
};
