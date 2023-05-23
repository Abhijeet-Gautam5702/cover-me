import React, { useState } from "react";

// icons
import { MdCopyAll } from "react-icons/md";

// other custom modules
import { getResponse } from "../../openAI_Service";

// styles
import "./InputForm.css";

// instantiate ClipboardJS
new ClipboardJS(".copy-btn");

export default function InputForm() {
  const [showCoverLetter, setShowCoverLetter] = useState(true);
  // const [coverLetterText, setCoverLetterText] = useState(null);
  const [coverLetterText, setCoverLetterText] = useState(
    "lorem ipsum dolor sit amor lorem ipsum dolor sit amore kandak kodak huygen"
  ); //testing
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

  // handle submit button
  async function handleSubmit() {
    const response = await getResponse(formData);
    setCoverLetterText(response);
    setShowCoverLetter(true);
    // console.log(coverLetterText);
  }

  return (
    <>
      <div className="app_form-wrapper">
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
            placeholder="e.g. React, Git..."
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
      {showCoverLetter && (
        <div className="app__coverLetter-wrapper ">
          <div className="coverLetter__head">
            <h3 className="coverLetter__head-text">Cover Letter</h3>
            {showCoverLetter && (
              <button
                className="copy-btn app__flex"
                data-clipboard-target=".coverLetter__text"
              >
                <MdCopyAll />
              </button>
            )}
          </div>
          <article className="coverLetter__text">{coverLetterText}</article>
        </div>
      )}
    </>
  );
}
