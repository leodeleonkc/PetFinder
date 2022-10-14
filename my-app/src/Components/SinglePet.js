import "../singlepet.css";
import { useContext, useState } from "react";
import { Context } from "../Fetch";
import loading from "../images/loading.gif";
import xBtn from "../images/x-btn-1.svg";
import xBtnHover from "../images/x-btn-2.svg";
import xBtnClick from "../images/x-btn-3.svg";

export default function SinglePet() {
  const [xButton, setXButton] = useState(xBtn);

  const { setViewPet, onePet, isLoading } = useContext(Context);
  // console.log(onePet);

  function handleClick() {
    setViewPet(false);
    setXButton(xBtnClick);
  }

  const photo = onePet?.photos[0]?.large;
  const name =
    onePet.name.charAt(0).toUpperCase() +
    onePet.name.slice(1).toLowerCase().replace(/&amp;/g, "&");
  const gender = onePet.gender;
  const age = onePet.age;
  const breed = onePet.breeds.primary;
  const color = onePet.colors.primary;
  const description = onePet.description
    ? `${onePet.description
        .replace(/&amp;/g, "&")
        .replace(/&#39;/g, "'")
        .replace(/&#34;/g, '"')}  [click below to continue]`
    : "Description not available.";
  const city = onePet?.contact?.address?.city
    ? onePet.contact.address.city
    : "N/A";
  const state = onePet?.contact?.address?.state
    ? onePet.contact.address.state
    : "N/A";
  const fixed = onePet.attributes.spayed_neutered;
  const declawed = onePet.attributes.declawed;
  const houseTrained = onePet.attributes.house_trained;
  const shotsCurrent = onePet.attributes.shots_current;
  const specialNeeds = onePet.attributes.special_needs;
  const coat = onePet.coat;
  const ggChildren = onePet.environment.children;
  const ggDogs = onePet.environment.dogs;
  const ggCats = onePet.environment.cats;
  // const adoptable = onePet.status;

  const linkMeet = () => {
    window.open(onePet.url, "_blank");
  };

  return (
    <div id="singlePet">
      <img
        onMouseEnter={() => setXButton(xBtnHover)}
        onMouseLeave={() => setXButton(xBtn)}
        src={xButton}
        alt="Close Window"
        className="single-pet--close-btn"
        onClick={handleClick}
      />
      {isLoading ? (
        <img className="loading" alt="Loading" src={loading} />
      ) : (
        <div className="single-pet--wrapper">
          <div className="single-pet--pet-photo-container">
            <img alt="Pet" src={photo} className="single-pet--photo" />
          </div>
          {/* {adoptable ? (
            <div title="Status: Available" className="blob"></div>
          ) : (
            ""
          )} */}
          <div className="single-pet--pet-deets">
            <div className="single-pet--status">
              <h1 className="single-pet--name">{name}</h1>{" "}
            </div>
            <p className="single-pet--line2">
              {age} {gender === "Unknown" ? "" : gender} • {color} • {breed} •{" "}
              {city}, {state}
            </p>

            <div className="single-pet--about-group">
              <p className={`single-pet--about ${coat ? "" : "hidden"}`}>
                {coat} coat
              </p>
              <p className={`single-pet--about ${fixed ? "" : "hidden"}`}>
                spayed / neutered
              </p>
              <p className={`single-pet--about ${declawed ? "" : "hidden"}`}>
                Declawed
              </p>
              <p
                className={`single-pet--about ${houseTrained ? "" : "hidden"}`}
              >
                house trained
              </p>
              <p
                className={`single-pet--about ${shotsCurrent ? "" : "hidden"}`}
              >
                Shots up to date
              </p>
              <p
                className={`single-pet--about ${specialNeeds ? "" : "hidden"}`}
              >
                special needs
              </p>
              <p className={`single-pet--about ${ggChildren ? "" : "hidden"}`}>
                loves kids
              </p>
              <p className={`single-pet--about ${ggDogs ? "" : "hidden"}`}>
                loves dogs
              </p>
              <p className={`single-pet--about ${ggCats ? "" : "hidden"}`}>
                loves cats
              </p>
            </div>

            <p className="single-pet--description">{description}</p>
            <p className="single-pet--more" onClick={linkMeet}>
              learn more...
            </p>
            <p className="single-pet--line2">Will open in new window</p>
          </div>
        </div>
      )}
    </div>
  );
}
