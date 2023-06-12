import React, { useEffect, useState } from "react";

// custom modules
import { setApiKeyFromUserInput } from "../../openAI_Service";

// styles
import "./OpenAIAuth.css";

export default function OpenAIAuth({ handleIsAuthenticated }) {
  const [authFormData, setAuthFormData] = useState({
    apiKey: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setAuthFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    const apiKey = JSON.parse(localStorage.getItem("cover_me_api_key"));
    // api-key found
    if (apiKey) {
      setAuthFormData((prevFormData) => {
        return {
          ...prevFormData,
          apiKey: apiKey,
        };
      });
      setApiKeyFromUserInput(apiKey);
      // handleIsAuthenticated(true);
    }
  }, []);

  function handleAuthenticateClick() {
    localStorage.setItem(
      "cover_me_api_key",
      JSON.stringify(authFormData.apiKey)
    );
    setApiKeyFromUserInput(authFormData.apiKey);
    handleIsAuthenticated(true);
  }

  return (
    <div className="w-full mt-10 lg:w-1/2  app__openAIAuth-wrapper">
      {/* <h1 className="text-4xl mt-4 mb-10 font-extrabold text-center">
        Sit back and Relax. <br />
        We'll do it for you.
      </h1> */}
      <p className="font-semibold auth-headtext">Enter your free OpenAI API key (<a target="_blank" href="https://www.howtogeek.com/885918/how-to-get-an-openai-api-key/">How?</a> ) </p>
      <div className="auth-form">
        <input
          type="text"
          name="apiKey"
          id="apiKey"
          className="user-input input-apiKey"
          placeholder="OpenAI API Key"
          value={authFormData.apiKey}
          onChange={handleChange}
        />
        <button
          className="app__form-submit authenticate-btn"
          onClick={handleAuthenticateClick}
        >
          Authenticate
        </button>
      </div>
    </div>
  );
}
