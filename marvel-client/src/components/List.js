import { useState, useEffect } from "react";

import marvel from "../apis/marvel.js";

console.log(marvel);

const List = () => {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const response = await marvel.get("/test", [], {
      params: { limit: 20, offset: 0 },
    });
  };
  getCharacters();
  setCharacters(response.data.items);
  console.log(response);
  return (
    <div>
      <h3>List</h3>
    </div>
  );
};

export default List;
