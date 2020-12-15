import { useState, useEffect } from "react";
import marvel from "../apis/marvel";

const useCharacters = (props) => {
  const [characters, setCharacters] = useState([]);
  const [charTotal, setCharTotal] = useState(0);

  useEffect(() => {
    items();
  }, [props.page]);

  const totalPages = Math.ceil(charTotal / props.ppp);

  const items = async () => {
    const response = await marvel.get("/characters", {
      params: {
        limit: props.ppp,
        offset: (props.page - 1) * props.ppp,
      },
    });

    setCharTotal(response.data.data.total);
    setCharacters(response.data.data.results);
  };

  return { characters, totalItems: charTotal, totalPages };
};

export default useCharacters;
