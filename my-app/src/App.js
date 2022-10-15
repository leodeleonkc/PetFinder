import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Hero from "./Components/Hero";
import PetDisplay from "./Components/PetDisplay";
import SavingPets from "./Components/SavingPets";
import TestimonialFooter from "./Components/TestimonialFooter";
import Banner from "./Components/Banner";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-alert" role="alert">
      <p>Something went wrong:</p>
      <pre>The location you entered is invalid.</pre>
      <pre>Please enter a valid location</pre>
      <pre> and try your search again. Meow!</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Hero />
      <Banner value="petView" />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
          return false;
        }}
      >
        {" "}
        <PetDisplay />
      </ErrorBoundary>
      <Banner />
      <SavingPets />
      <TestimonialFooter />
    </div>
  );
}

export default App;
