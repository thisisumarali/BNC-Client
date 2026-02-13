import React from "react";

const H1 = ({ children, className = " " }) => {
  return (
    <h1
      className={`text-3xl md:text-4xl xl:text-5xl  font-mono  text-center py-3 pt-2 lg:py-6 lg:pt-16 uppercase ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;
