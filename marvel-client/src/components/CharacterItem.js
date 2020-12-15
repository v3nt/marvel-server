// import React from "react";
import React from "react";
import { Link } from "react-router-dom";

const CharacterItem = ({ name, id, thumbnail }) => {
  const thumb = thumbnail.path + "/portrait_medium." + thumbnail.extension;

  return (
    <div className="character-container">
      <div className="character-content">
        <div className="character-text">
          <h2 className="character-title">
            <Link to={`/character/${id}`}>{name}</Link>
          </h2>
        </div>
        <div className="character-image">
          <Link to={`/character/${id}`}>
            <img src={thumb} alt={name} className="character-thumb" />
          </Link>
        </div>
      </div>
    </div>
  );
  //   return <div onClick={() => onCharacterSelect(id)}>{name}</div>;
};

export default CharacterItem;
