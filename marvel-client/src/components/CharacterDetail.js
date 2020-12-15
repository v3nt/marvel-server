import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";

const SECTIONS = ["comics", "series", "stories"];

const Description = ({ description }) => {
  return (
    <div>
      <p>{description ? description : ""}</p>
    </div>
  );
};

const CharacterDetail = () => {
  const { id } = useParams();
  // custom hook. useCharacter.js
  const { isLoading, character } = useCharacter(id);
  const isArray = character instanceof Array;

  if (!isLoading && isArray === false) {
    const thumb =
      character.thumbnail.path +
      "/portrait_uncanny." +
      character.thumbnail.extension;
    console.log(character);
    return (
      <div className="container">
        <div className="character-info">
          <h1 className="title">{character.name}</h1>
          <Description {...character} />
          <img src={thumb} alt={character.name} />
          {SECTIONS.map((sec, i) => {
            return (
              <div key={i} className="character-sub-section {sec}">
                <h3 className="sub-title">
                  {sec} {character[`${sec}`].available}
                </h3>

                <ul className="items-list ">
                  {character[`${sec}`].items.map(({ name }, i) => {
                    return (
                      <li key={i} className="list-item">
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default CharacterDetail;
