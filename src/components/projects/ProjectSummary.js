import React from "react";

const ProjectSummary = ({ id, title, content }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{id}</span>
        <p>{title}</p>
        <p className="grey-text">{content}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
