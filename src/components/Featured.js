import React from "react";

const Featured = ({ match }) => {
  let firstName = match.params.fname;
  let lastName = match.params.lname;
  let fullName = `${match.params.fname} ${match.params.lname}`;
  let topic = match.params.topic;
  return (
    <div className="main-content">
      <h2>{firstName} </h2>
      <p>
        Introducing <strong>{fullName}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!
      </p>
    </div>
  );
};

export default Featured;
