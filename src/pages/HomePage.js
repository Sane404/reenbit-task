import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    //if user doesn't exist redirect right away
    if (!localStorage.getItem("user")) {
      navigate("/");
    } else {
      fetch("https://rickandmortyapi.com/api/character")
        .then((data) => data.json())
        .then((ch) => {
          setCharacters(ch.results);
        });
    }
  }, []);
  return (
    <div className="homepage">
      <img
        className="logo"
        alt="Rick and Morty banner"
        src="/homepage_banner.svg"
      />
      <input
        type="search"
        className="filter"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="characters">
        {characters
          .filter((item) => {
            return item.name.toLowerCase().includes(query.toLowerCase());
          })
          .map((ch) => {
            return (
              <Link to={`/character/${ch.id}`}>
                Your Name
                <div className="char">
                  <img src={ch.image} alt={ch.name} />
                  <b className="name">{ch.name}</b>
                  <p className="species">{ch.species}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
