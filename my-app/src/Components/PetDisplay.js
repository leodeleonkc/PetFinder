import { useContext } from "react";
import { Context } from "../Fetch.js";
import Pet from "./Pet";
import "../petDisplay.css";

export default function PetDisplay() {
  const { allPets } = useContext(Context);

  const PetElements = Object.entries(allPets).map((entry) => {
    return <Pet key={entry[1].id} img={entry[1]} />;
  });

  console.log(PetElements);

  return (
    <div className="component-container">
      <div className="pet-display--title">
        <h1>Pets Available For Adoption Nearby</h1>
      </div>

      <div className="pet-display--pet-array">{PetElements}</div>
    </div>
  );
}
