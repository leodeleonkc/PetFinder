import { useState, useEffect, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [allPets, setAllPets] = useState({});

  const key = process.env.REACT_APP_PF_KEY;
  const secret = process.env.REACT_APP_SECRET_KEY;

  useEffect(() => {
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

        return fetch("https://api.petfinder.com/v2/animals?limit=15", {
          headers: {
            Authorization: data.token_type + " " + data.access_token,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
      })
      .then((res) => res.json())
      .then((data) => setAllPets(data.animals))

      .catch(function (err) {
        console.log("Oops... no bueno.", err);
      });
  }, []);

  const searchPets = (category, location) => {
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

        return fetch(
          `https://api.petfinder.com/v2/animals?type=${category}&location=${location}&limit=15`,
          {
            headers: {
              Authorization: data.token_type + " " + data.access_token,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
      })
      .then((res) => res.json())
      .then((data) => setAllPets(data.animals))

      .catch(function (err) {
        console.log("Oops... no bueno.", err);
      });
  };

  return (
    <Context.Provider value={{ allPets, searchPets }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
