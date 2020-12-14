import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";

const CharacterDetail = () => {
  // from the Route :id
  const { id } = useParams();
  // custom hook. useCharacter.js
  const [character] = useCharacter(id);
  // this only works sometimes but errors if i refresh the page
  // console.log(character.comics.available);
  return (
    <div>
      <h2 className="ui header">Character Details</h2>
      <p>Works every time: {character.name}</p>
      <div className="ui segment"></div>
      <pre></pre>
    </div>
  );
};

export default CharacterDetail;
