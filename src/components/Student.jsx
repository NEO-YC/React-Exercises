import React from "react";

const Student = ({name,lname,grade }) => {





  return (
    <p style={{ border: "3px solid grey" }}>
      {name}-{lname}-{grade}
    </p>
  );
};

export default Student;
