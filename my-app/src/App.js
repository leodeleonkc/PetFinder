import "./App.css";
import Hero from "./Components/Hero";
import PetDisplay from "./Components/PetDisplay";
import SavingPets from "./Components/SavingPets";
import TestimonialFooter from "./Components/TestimonialFooter";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <Hero />
      <Banner />
      <PetDisplay />
      <Banner />
      <SavingPets />
      <TestimonialFooter />
    </div>
  );
}

export default App;
