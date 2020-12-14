// import React from "react";
import React from "react";
import { Link } from "react-router-dom";

const CharacterItem = ({ name, id, thumbnail }) => {
  const thumb = thumbnail.path + "/portrait_medium." + thumbnail.extension;

  return (
    <div>
      <h3>
        <Link to={`/character/${id}`}>{name}</Link>
      </h3>
      <Link to={`/character/${id}`}>
        <img src={thumb} />
      </Link>
    </div>
  );
  //   return <div onClick={() => onCharacterSelect(id)}>{name}</div>;
};

export default CharacterItem;
