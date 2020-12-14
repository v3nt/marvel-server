// import React from "react";
import React from "react";

const CharacterItem = ({ name, id, onCharacterSelect }) => {
  return <div onClick={() => console.log(id)}>{name}</div>;
  //   return <div onClick={() => onCharacterSelect(id)}>{name}</div>;
};

export default CharacterItem;
