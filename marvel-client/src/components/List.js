import React from "react";

const List = () => {
  console.log("Marvel KEY", process.env.REACT_APP_MARVEL_API_KEY);
  console.log("Marvel Secrest", process.env.REACT_APP_MARVEL_API_SECRET);

  return (
    <div>
      <h3>List</h3>
    </div>
  );
};

export default List;
