import { useState, useEffect } from "react";
import marvel from "../apis/marvel";

const useCharacter = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    items();
  }, []);

  const items = async (term) => {
    const response = await marvel.get("/character/");
    setCharacter(response.data.data.results);
    console.log("response");
    console.log(response.data.data.results);
  };

  return [character];
};

export default useCharacter;
