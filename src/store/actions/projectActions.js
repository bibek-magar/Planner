import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../constants";

export const createProject = project => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  try {
    const firestore = getFirestore();
    await firestore.collection("projects").add({
      ...project,
      authorFirstName: "Bibek",
      authorLastname: "Magar",
      authorId: "777",
      createdAt: new Date()
    });

    dispatch({ type: CREATE_PROJECT, payload: project });
  } catch (e) {
    dispatch({ type: CREATE_PROJECT_ERROR, payload: e });
  }
};
