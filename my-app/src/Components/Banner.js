import { useState, useEffect } from "react";
import "../banner.css";

export default function Banner() {
  const [scrollPosition, setScrollPosition] = useState(0);

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
    <div className="breed-banner">
      <p
        style={{ transform: `translate(-${scrollPosition}px)` }}
        className="breed-banner-text"
      >
        Persian Cat &#8226; British Shorthair &#8226; Bulldog &#8226; Golden
        Retriever &#8226; Abyssinian &#8226; Burmese Cat &#8226; German Shepherd
        &#8226; French Bulldog &#8226; Boxer
      </p>
    </div>
  );
}
