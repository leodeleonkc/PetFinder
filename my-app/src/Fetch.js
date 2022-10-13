import { useState, useEffect, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [allPets, setAllPets] = useState({});
  const [singlePet, setSinglePet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const key = process.env.REACT_APP_PF_KEY;
  const secret = process.env.REACT_APP_SECRET_KEY;

  useEffect(() => {
    // searchPets();
    fetchPet("47247776");
  }, []);

  const searchPets = (category, location) => {
    setIsLoading(true);
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        console.log("token", data);

        const locationQ = !location ? "" : `&location=${location}`;
        const typeQ = !category ? "" : `&type=${category}`;

        return fetch(
          `https://api.petfinder.com/v2/animals?limit=21${typeQ}${locationQ}`,
          {
            headers: {
              Authorization: data.token_type + " " + data.access_token,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
      })
      .then((res) => res.json())
      .then(function (data) {
        setAllPets(data.animals);
        setIsLoading(false);
      });
  };

  // Individual Pet Fetch

  const fetchPet = (petID) => {
    setIsLoading(true);
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        console.log("token", data);

        return fetch(`https://api.petfinder.com/v2/animals/${petID}`, {
          headers: {
            Authorization: data.token_type + " " + data.access_token,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
      })
      .then((res) => res.json())
      .then(function (data) {
        setSinglePet(data.animal);
        setIsLoading(false);
        console.log(singlePet);
      });
  };

  return (
    <Context.Provider
      value={{ allPets, searchPets, isLoading, fetchPet, singlePet }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
