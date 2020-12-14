// import React from "react";
import React from "react";
import { Link } from "react-router-dom";

const CharacterItem = ({ name, id, onCharacterSelect }) => {
  return (
    <div>
      <Link to={`/character/detail/${id}`}>{name}</Link>
    </div>
  );
  //   return <div onClick={() => onCharacterSelect(id)}>{name}</div>;
};

export default CharacterItem;
