import { useContext } from "react";
import { Context } from "../Fetch.js";
import loading from "../images/loading.gif";
import Pet from "./Pet";
import OnePet from "./SinglePet";

import "../petDisplay.css";

export default function PetDisplay() {
  const { allPets, isLoading, onePet, viewPet } = useContext(Context);

  const PetElements = Object.entries(allPets).map((entry) => {
    return <Pet key={entry[1].id} img={entry[1]} />;
  });

  console.log(viewPet);

  return (
    <div id="petDisplay">
      <div className="component-container">
        {isLoading ? (
          <img className="loading" alt="Loading" src={loading} />
        ) : !viewPet ? (
          <div>
            <div className="pet-display--title">
              <h1>Pets Available For Adoption</h1>
            </div>
            <div className="pet-display--pet-array">{PetElements}</div>
          </div>
        ) : (
          <OnePet />
        )}
      </div>
    </div>
  );
}
