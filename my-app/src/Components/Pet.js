import "../pet.css";
import placeHolda from "../images/default-img.svg";

export default function Pet({ img }) {
  let imgSrc = img?.primary_photo_cropped?.small
    ? img.primary_photo_cropped.small
    : placeHolda;

  let breed = img?.breeds?.primary ? img.breeds.primary : "null";

  return (
    <div className="pet-data">
      <div className="pet-container-top">
        <img alt="Pet" src={imgSrc} className="pet-image" />
      </div>
      <div className="pet-container-bottom">
        <p className="pet-name">{img.name}</p>
        <p className="pet-description">
          {img.age} {img.gender} {breed}
        </p>
        <p className="pet-description pet-span">
          From: {img.contact.address.city}, {img.contact.address.state}
        </p>
      </div>
    </div>
  );
}
