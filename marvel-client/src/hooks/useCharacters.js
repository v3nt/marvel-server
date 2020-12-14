import { useState, useEffect } from "react";
import md5 from "md5";
import marvel from "../apis/marvel";
//http://gateway.marvel.com/v1/public/characters?ts={{ts}}&apikey={{apikey}}&hash={{hash}}

const myApiURL =
  process.env.REACT_APP_MARVEL_TS +
  process.env.REACT_APP_MARVEL_API_SECRET +
  process.env.REACT_APP_MARVEL_API_KEY;

const myApiURLM5 = md5(myApiURL);

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    items();
  }, []);

  const items = async (term) => {
    const response = await marvel.get("/characters", {
      params: {
        ts: 1,
        apikey: process.env.REACT_APP_MARVEL_API_KEY,
        hash: myApiURLM5,
        limit: 100,
      },
    });
    setCharacters(response.data.results);
    console.log("response");
    console.log(response);
    console.log(response.data.data.results);
  };

  return [characters];
};

export default useCharacters;
