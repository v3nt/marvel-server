import { useState, useEffect } from "react";
import marvel from "../apis/marvel";

function useCharacter(id) {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      setIsLoading(true);
      await marvel
        .get(`/characters/${id}`)
        .then((response) => {
          /* DO STUFF WHEN THE CALLS SUCCEEDS */
          setIsLoading(false);
          setCharacter(response.data.data.results[0]);
        })
        .catch((e) => {
          /* HANDLE THE ERROR (e) */
        });
    };
    fetchData();
  }, [id]);
  return {
    isLoading,
    character,
  };
}

export default useCharacter;
