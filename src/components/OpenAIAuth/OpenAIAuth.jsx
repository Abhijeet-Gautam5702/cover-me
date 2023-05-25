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
    <div className="app__openAIAuth-wrapper">
      <p className="auth-headtext">Enter your free OpenAI API key</p>
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
