const initState = {
  projects: [
    { id: "1", title: "Help me find", content: "This is the content of id 1" },
    { id: "2", title: "Test me find", content: "This is the content of id 2" },
    { id: "3", title: "Kill me find", content: "This is the content of id 3" }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action) {
    case action.type:
    default:
      return state;
  }
};

export default projectReducer;
