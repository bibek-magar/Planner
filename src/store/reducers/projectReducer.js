import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../constants";

const initState = {
  projects: [
    { id: "1", title: "Help me find", content: "This is the content of id 1" },
    { id: "2", title: "Test me find", content: "This is the content of id 2" },
    { id: "3", title: "Kill me find", content: "This is the content of id 3" }
  ]
};
const projectReducer = (state = initState, action, props) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return state;
    case CREATE_PROJECT_ERROR:
      return state;
    default:
      return state;
  }
};

export default projectReducer;
