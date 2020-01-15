import React from "react";
import moment from "moment";

const Notification = ({ notifications }) => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"></span>
          <ul className="notifications">
            {notifications &&
              notifications.map(({ id, user, content, time }) => {
                return (
                  <li key={id}>
                    <span className="pink-text">{user} </span>
                    <span>{content}</span>
                    <div className="grey-text note-date">
                      {moment(time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
