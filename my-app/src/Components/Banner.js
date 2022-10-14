import { useState, useEffect, useContext } from "react";
import { Context } from "../Fetch";
import "../banner.css";

export default function Banner(props) {
  const { onePet, viewPet } = useContext(Context);
  const [scrollPosition, setScrollPosition] = useState(0);

  const bannerDefault = `Persian Cat • British Shorthair • Bulldog • Golden Retriever • Abyssinian • Burmese Cat • German Shepherd • French Bulldog • Boxer`;

  const bannerDynamic = viewPet
    ? `${onePet.breeds.primary} • ${onePet.contact.address.city} • ${onePet.breeds.primary} • ${onePet.contact.address.city} • ${onePet.breeds.primary} • ${onePet.contact.address.city} • ${onePet.breeds.primary} • ${onePet.contact.address.city} • ${onePet.breeds.primary} • ${onePet.contact.address.city} • ${onePet.breeds.primary} • ${onePet.contact.address.city}`
    : bannerDefault;

  const handleScroll = () => {
    const position = window.pageYOffset / 10;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="breed-banner" id={`${props.value}`}>
      <h1
        style={{ transform: `translate(-${scrollPosition}px)` }}
        className="breed-banner-text"
      >
        {viewPet ? bannerDynamic : bannerDefault}
      </h1>
    </div>
  );
}
