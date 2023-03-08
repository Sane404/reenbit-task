import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState(
    JSON.parse(localStorage.getItem("search_query")) || ""
  );
  useEffect(() => {
    //if user doesn't exist redirect right away
    if (!localStorage.getItem("user")) {
      navigate("/");
    } else {
      fetch("https://rickandmortyapi.com/api/character")
        .then((data) => data.json())
        .then((ch) => {
          let sorted = ch.results.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
          setCharacters(sorted);
        });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("search_query", JSON.stringify(query));
  }, [query]);

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
        value={query}
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
