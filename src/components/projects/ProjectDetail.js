import React from "react";

const ProjectDetail = props => {
  console.log(props.match.params.id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            corporis quam unde praesentium ipsam vel totam aspernatur sed, quos
            sequi laboriosam nesciunt ut reiciendis itaque architecto sint saepe
            odio iste.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by BVk</div>
          <div>2nd September,2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
