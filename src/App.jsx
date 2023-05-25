// components
import InputForm from "./components/InputForm/InputForm";

// styles
import "./App.css";
import { useState } from "react";
import OpenAIAuth from "./components/InputForm/OpenAIAuth/OpenAIAuth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleIsAuthenticated(value){
    setIsAuthenticated(prevValue => value);
  }

  return (
    <div className="app">
      <p className="app__logo">
        cover<span className="accent">ME</span>
      </p>
      {isAuthenticated == true ? (
        <InputForm handleIsAuthenticated={handleIsAuthenticated}/>
      ) : (
        <OpenAIAuth
        handleIsAuthenticated={handleIsAuthenticated}
        />
      )}
    </div>
  );
}

export default App;
