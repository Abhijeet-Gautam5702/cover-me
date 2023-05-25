import { useState } from "react";

// components
import InputForm from "./components/InputForm/InputForm";
import OpenAIAuth from "./components/OpenAIAuth/OpenAIAuth";

// styles
import "./App.css";
import DevLabel from "./components/DevLabel/DevLabel";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleIsAuthenticated(value) {
    setIsAuthenticated((prevValue) => value);
  }

  return (
    <div className="app">
      <DevLabel />
      <p className="app__logo">
        cover<span className="accent">ME</span>
      </p>
      {isAuthenticated == true ? (
        <InputForm handleIsAuthenticated={handleIsAuthenticated} />
      ) : (
        <OpenAIAuth handleIsAuthenticated={handleIsAuthenticated} />
      )}
    </div>
  );
}

export default App;
