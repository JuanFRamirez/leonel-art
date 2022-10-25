import React from "react";
const TwoSideLayout = ({ first_children, second_children }) => {
  return (
    <div className="two-side">
      {first_children}
      {second_children}
    </div>
  );
};
export default TwoSideLayout;
