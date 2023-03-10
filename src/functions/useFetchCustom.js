import { useState, useEffect } from "react";
const useFetchCustom = (url) => {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((c) => {
        let { gender, name, status, image, species, type } = c;
        if (type === "") type = "Unknown"; // some characters have empty string as type so I chose to do this
        let { name: origin } = c.origin;
        const characterObj = {
          name,
          image,
          info: [
            {
              title: "Gender",
              description: gender,
            },
            {
              title: "Status",
              description: status,
            },
            {
              title: "Specie",
              description: species,
            },
            {
              title: "Type",
              description: type,
            },
            {
              title: "Origin",
              description: origin,
            },
          ],
        };
        setCharacter(characterObj);
      });
  }, [url]);

  return [character];
};

export default useFetchCustom;
