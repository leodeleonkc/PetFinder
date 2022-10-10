import { useEffect, useState } from "react";

export default function PetDisplay() {
  const key = process.env.REACT_APP_PF_KEY;
  const secret = process.env.REACT_APP_SECRET_KEY;
  console.log(key, secret);

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

        return fetch(
          "https://api.petfinder.com/v2/animals?organization=RI77&status=adoptable",
          {
            headers: {
              Authorization: data.token_type + " " + data.access_token,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
      })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        console.log("pets", data);
      })
      .catch(function (err) {
        console.log("something went wrong", err);
      });
  }, []);

  return (
    <div className="hero--container">
      <h1>Pet Display Section</h1>
    </div>
  );
}
