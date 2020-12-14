import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useCharacter(id);

  return (
    <div>
      <div className="ui segment">
        <h2 className="ui header">Character Details</h2>
        <p>{character.name}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
