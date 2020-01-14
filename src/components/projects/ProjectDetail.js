import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetail = ({ project }) => {
  console.log(project);
  if (project) {
    let {
      authorFirstName,
      authorLastName,
      content,
      title,
      createdAt
    } = project;
    const date = new Date(createdAt.seconds);
    console.log(date);

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> {title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by: {authorFirstName} {authorLastName}
            </div>
            <div>{date.toUTCString()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container section project-details">Loading...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(ProjectDetail);
