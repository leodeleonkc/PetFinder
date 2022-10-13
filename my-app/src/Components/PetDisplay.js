import { useContext } from "react";
import { Context } from "../Fetch.js";
import loading from "../images/loading.gif";
import Pet from "./Pet";
import "../petDisplay.css";

export default function PetDisplay() {
  const { allPets, isLoading, singlePet } = useContext(Context);

  const PetElements = Object.entries(allPets).map((entry) => {
    return <Pet key={entry[1].id} img={entry[1]} />;
  });

  console.log(PetElements);

  return (
    <div id="petDisplay">
      <div className="component-container">
        <div className="pet-display--title">
          <h1>Pets Available For Adoption</h1>
        </div>
        <div className="pet-display--pet-array">
          {isLoading ? (
            <img className="loading" alt="Loading" src={loading} />
          ) : (
            PetElements
          )}
        </div>
      </div>
    </div>
  );
}
