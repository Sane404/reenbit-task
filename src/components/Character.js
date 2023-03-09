import React from "react";
import { Link } from "react-router-dom";

const Character = ({ props }) => {
  const { name, id, image, species } = props;
  console.log({ name });
  return (
    <Link to={`/character/${id}`} className="character">
      Your Name
      <div className="char">
        <img src={image} alt={name} />
        <b className="name">{name}</b>
        <p className="species">{species}</p>
      </div>
    </Link>
  );
};

export default Character;
