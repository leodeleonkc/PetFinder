import { useState, useEffect, createContext } from "react";

const ScrollContext = createContext();

function ScrollTracker(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset / 5;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollPosition }}>
      {props.children}
    </ScrollContext.Provider>
  );
}

export { ScrollTracker, ScrollContext };
