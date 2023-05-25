import React, { useEffect, useState } from "react";

// icons
import { MdCopyAll } from "react-icons/md";

// other custom modules
import { getResponse } from "../../openAI_Service";

// other components
import Loader from "../Loader";

// styles
import "./InputForm.css";

// instantiate ClipboardJS
new ClipboardJS(".copy-btn");

export default function InputForm({ handleIsAuthenticated }) {
  // const [showCoverLetter, setShowCoverLetter] = useState(false);
  // const [coverLetterText, setCoverLetterText] = useState(null);

  const [showLoader, setShowLoader] = useState(false);

  const [formData, setFormData] = useState({
    job_profile: "",
    min_yoe: "",
    job_desc: "",
    skillset: "",
  });
  // handle changes to the input fields
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    document.querySelector(".coverLetter__text").innerHTML =
      "Your Cover Letter will appear here";
  }, []);

  // handle submit button
  async function handleSubmit() {
    document.querySelector(".coverLetter__text").innerHTML = "";
    setShowLoader(true);
    var response = await getResponse(formData);
    setShowLoader(false);

    //regEx to remove first 2 <br> tags
    response = response.replace(/^(<br>){2}/, "");

    document.querySelector(".coverLetter__text").innerHTML = response;
  }

  return (
    <>
      <div className="app_form-wrapper">
        <a onClick={() => handleIsAuthenticated(false)}>Change API key</a>
        <p className="form__head-text">
          Enter relevant details to generate a cover letter
        </p>
        <form className="app__flex" action="">
          <label htmlFor="profile"></label>
          <input
            type="text"
            name="job_profile"
            id="job_profile"
            className="user-input"
            value={formData.job_profile}
            onChange={handleChange}
            placeholder="Job Profile"
          />
          <label htmlFor="min_yoe"></label>
          <input
            type="text"
            name="min_yoe"
            id="min_yoe"
            className="user-input"
            placeholder="YOE"
            value={formData.min_yoe}
            onChange={handleChange}
          />
          <label htmlFor="skillset"></label>
          <input
            type="text"
            name="skillset"
            id="skillset"
            className="user-input"
            placeholder="List your skills (e.g. Git, React, GraphQL etc.)"
            value={formData.skillset}
            onChange={handleChange}
          />
          <textarea
            name="job_desc"
            id="job_desc"
            className="user-input"
            cols="30"
            rows="10"
            value={formData.job_desc}
            onChange={handleChange}
            placeholder="Copy the Job Description here"
          />
        </form>
      </div>
      <button className="app__form-submit" onClick={handleSubmit}>
        Generate Cover Letter
      </button>
      <div className="app__coverLetter-wrapper ">
        <div className="coverLetter__head">
          <h3 className="coverLetter__head-text">Cover Letter</h3>
          <button
            className="copy-btn app__flex"
            data-clipboard-target=".coverLetter__text"
            title="Copy"
          >
            <MdCopyAll />
          </button>
        </div>
        <div
          className="app__flex"
          style={{
            border: "1.5px solid var(--accent)",
            borderRadius: "7px",
            padding: "0.5rem",
            paddingTop: 0,
            marginTop: "0.5rem",
          }}
        >
          {showLoader && <Loader />}
          <p className="coverLetter__text"></p>
        </div>
      </div>
    </>
  );
}
