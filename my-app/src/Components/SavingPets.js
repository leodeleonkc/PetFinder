import savingPets from "../images/saving-pets-img.png";
import "../savingpets.css";

export default function SavingPets() {
  const visitFoundation = () => {
    window.open("https://petfinderfoundation.com/", "_blank");
  };
  return (
    <div className="component-container saving-pets--container">
      <div className="saving-pets--content">
        <h1>Saving Pets Together</h1>
        <p className="saving-pets--text">
          This web app is powered by Petfinder’s API. The Petfinder Foundation
          is the <strong>only</strong> national nonprofit organization that does
          nothing but give grants to animal shelters and rescues. By helping
          adoption groups, we’re saving pets... together.
        </p>
        <button onClick={visitFoundation} className="saving-pets--btn">
          Learn More
        </button>
      </div>

      <div className="saving-pets--image-container">
        <img
          alt="Three cute little furry friends"
          className="saving-pets--img"
          src={savingPets}
        />
      </div>
    </div>
  );
}
