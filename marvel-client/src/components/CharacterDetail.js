import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";
import usePublications from "../hooks/usePublications";

const SECTIONS = ["comics", "series", "stories"];

const Description = ({ description }) => {
  return (
    <div className="character-description">
      <p>{description ? description : ""}</p>
    </div>
  );
};

const CharacterDetail = () => {
  const { id } = useParams();
  const { isLoading, character } = useCharacter(id);
  // const { isLoadingPubs, publications, publicationsTotal } = usePublications(
  //   id
  // );
  const isArray = character instanceof Array;

  if (!isLoading && isArray === false) {
    const thumb =
      character.thumbnail.path + "." + character.thumbnail.extension;
    ///portrait_uncanny

    return (
      <div className="container">
        <div className="character-row">
          <div className="character-info">
            <h1 className="character-page-title">{character.name}</h1>
            <Description {...character} />
          </div>
          <div className="character-media">
            <img src={thumb} alt={character.name} className="img-fluid" />
          </div>
          <div className="character-section">
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
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default CharacterDetail;
