import React from "react";

const CharacterInfo = ({ props }) => {
  const { name, image, info } = props;
  console.log(name, image, info);
  return (
    <>
      <img className="character-info__image" src={image} alt={name} />
      <h2 className="character-info__name">{name}</h2>
      <h3>Informations</h3>
      {info?.map((item, i) => {
        return (
          <div className="character-info__wrap" key={i}>
            <b className="character-info__title">{item.title}</b>
            <p className="character-info__description">{item.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default CharacterInfo;
