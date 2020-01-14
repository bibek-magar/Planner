import React from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(({ id, title, content }) => {
          return (
            <Link to={"/project/" + id}>
              <ProjectSummary
                key={id}
                id={id}
                title={title}
                content={content}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
