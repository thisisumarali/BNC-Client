import React from "react";

const H1 = ({ children, className = " " }) => {
  return (
    <h1
      className={`text-5xl  font-mono  text-center py-6 pt-16 uppercase ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;
