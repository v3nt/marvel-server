import { useState, useEffect } from "react";
import marvel from "../apis/marvel";

const useCharacter = (id) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    item();
  }, []);

  const item = async (term) => {
    const response = await marvel.get(`/characters/${id}`);
    setCharacter(response.data.data.results[0]);
  };

  return [character];
};

export default useCharacter;
