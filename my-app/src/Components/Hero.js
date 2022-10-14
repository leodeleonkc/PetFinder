import "../hero.css";
import { useState, useEffect, useContext, useRef } from "react";
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
  const search = useRef(null);

  const handleScroll = () => {
    const position = window.pageYOffset / 7;
    setScrollPosition(position);
  };

  const showResults = () => {
    window.location.href = "#banner";
    return null;
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetch.searchPets(category, location);
      showResults();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLocationChange(e) {
    setLocation(e.target.value);
    console.log(location);
  }

  function handleCategory(category) {
    setCategory(category);
    search.current.focus();
    // fetch.searchPets(category, location);
    // showResults();
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
          shelters and rescues. 1️⃣ Select a <strong>pet category</strong> below.
          2️⃣ Enter your prefered <strong>location</strong>. 3️⃣ Search for
          available <strong>pets in your area</strong> !
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
          <img
            src={star4}
            alt="Pointy star ornament"
            className="hero--star4 star"
          />
          <input
            ref={search}
            type="text"
            className="hero--input"
            placeholder="Enter City & State, or Zip Code"
            value={location}
            onChange={handleLocationChange}
            onKeyDown={handleKeyDown}
          ></input>
          <a href="#banner">
            <button
              onClick={() => fetch.searchPets(category, location)}
              className="hero--search-btn"
            >
              Search Pets
            </button>
          </a>
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
