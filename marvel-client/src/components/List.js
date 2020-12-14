import React from "react";

import marvel from "../apis/marvel.js";

console.log(marvel);

const List = () => {
  const characters = marvel.get("", {
    params: { limit: 20, offset: 0 },
  });
  //   console.log(characters);
  return (
    <div>
      <h3>List</h3>
    </div>
  );
};

export default List;
