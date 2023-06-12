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
    <div className="min-h-screen flex flex-col justify-between">
      <div className=" w-full flex flex-col justify-start items-center app">
        <h1 className="mb-5 app__logo w-full text-center rounded-md  bg-green-200">
          cover<span className="accent">ME</span>
        </h1>
        {/* <hr className="w-full  bg-black h-1" /> */}
        {isAuthenticated == true ? (
          <InputForm handleIsAuthenticated={handleIsAuthenticated} />
        ) : (
          <OpenAIAuth handleIsAuthenticated={handleIsAuthenticated} />
        )}
      </div>
      {isAuthenticated && <DevLabel/>}
    </div>
  );
}

export default App;
