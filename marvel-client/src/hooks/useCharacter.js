import { useState, useEffect } from "react";
import marvel from "../apis/marvel";

const useCharacter = (id) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    loadItem();
    return () => {};
  }, [id]);

  const loadItem = async (term) => {
    const response = await marvel.get(`/characters/${id}`);
    console.log(response.data.data.results[0]);
    setCharacter(response.data.data.results[0]);
  };

  return [character];
};

export default useCharacter;
