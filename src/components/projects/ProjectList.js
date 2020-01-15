import React from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link key={project.id} to={"/project/" + project.id}>
              <ProjectSummary key={project.id} project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
