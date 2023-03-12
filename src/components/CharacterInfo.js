import React from "react";
import "./CharacterInfo.css";
const CharacterInfo = ({ props }) => {
  const { name, image, info } = props;
  console.log(name, image, info);
  return (
    <div className="character-info">
      <img className="character-info__image" src={image} alt={name} />
      <h2 className="character-info__name">{name}</h2>
      <h3 className="details-title">Informations</h3>
      <div className="details-wrap">
        {info?.map((item, i) => {
          return (
            <div className="character-details" key={i}>
              <b className="character-details__title">{item.title}</b>
              <p className="character-details__description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterInfo;
