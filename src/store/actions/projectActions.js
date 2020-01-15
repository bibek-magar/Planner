import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../constants";

export const createProject = project => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  try {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    await firestore.collection("projects").add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastname: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    });

    dispatch({ type: CREATE_PROJECT, payload: project });
  } catch (e) {
    dispatch({ type: CREATE_PROJECT_ERROR, payload: e });
  }
};
