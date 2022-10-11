import "../hero.css";
import { useState, useEffect, useContext } from "react";
import { Context } from "../Fetch";
import figaro from "../images/figaro.png";
import star1 from "../images/stars/star1.svg";
import star2 from "../images/stars/star2.svg";
import star3 from "../images/stars/star3.svg";
import star4 from "../images/stars/star4.svg";

export default function Hero() {
  const fetch = useContext(Context);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("cat");

  const handleScroll = () => {
    const position = window.pageYOffset / 7;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLocationChange(e) {
    setLocation(() => e.target.value);
    console.log(location);
  }

  function handleCategory(category) {
    setCategory(() => category);
    fetch.searchPets(category, location);
    console.log(category);
  }

  return (
    <div className="hero--container">
      <div className="hero--header">
        <h1 className="hero--title">
          Find your new furry <span className="red">best friend</span> today!
        </h1>
        <p className="hero--description">
          Browse pets up for adoption near you from our network of over 11,500
          shelters and rescues.
        </p>
        <img
          src={star2}
          alt="Pointy star ornament"
          className="hero--star2 star"
        />

        <img
          src={star3}
          alt="Pointy star ornament"
          className="hero--star3 star"
        />
        <img
          src={star4}
          alt="Pointy star ornament"
          className="hero--star4 star"
        />
        <div className="hero--buttons">
          <button
            className={`hero--btn ${category === "cat" ? "selected" : ""}`}
            onClick={() => handleCategory("cat")}
          >
            Cat
          </button>
          <button
            className={`hero--btn ${category === "dog" ? "selected" : ""}`}
            onClick={() => handleCategory("dog")}
          >
            Dog
          </button>
          <button
            className={`hero--btn ${category === "rabbit" ? "selected" : ""}`}
            onClick={() => handleCategory("rabbit")}
          >
            Rabbit
          </button>
          <button
            className={`hero--btn ${category === "bird" ? "selected" : ""}`}
            onClick={() => handleCategory("bird")}
          >
            Bird
          </button>
        </div>
        <div className="hero--the-search">
          <input
            type="text"
            className="hero--input"
            placeholder="Enter City, State, or Zip Code"
            value={location}
            onChange={handleLocationChange}
          ></input>
          <button
            onClick={() => fetch.searchPets(category, location)}
            className="hero--search-btn"
          >
            Search Pets
          </button>
        </div>
      </div>
      <div className="hero--mugshot">
        <img
          style={{ transform: `rotate(${scrollPosition}deg)` }}
          src={star1}
          alt="Pointy star ornament"
          className="hero--star1 star"
        />

        <img
          src={figaro}
          alt="American long-hair grey cat sitting there being cute."
          className="hero--figaro"
        />
      </div>
    </div>
  );
}
