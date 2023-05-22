import React, { useState } from "react";

// other modules
import { getResponse } from "../../openAI_Service";

// styles
import "./InputForm.css";

export default function InputForm() {
  const [showCoverLetter, setShowCoverLetter] = useState(false);
  const [coverLetterText, setCoverLetterText] = useState(null);
  const [formData, setFormData] = useState({
    job_profile: "",
    min_yoe: "",
    job_desc: "",
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
        <h2 className="form__head">
          Enter relevant details to generate Cover Letter
        </h2>
        <label htmlFor="profile"></label>
        <input
          type="text"
          name="job_profile"
          id="job_profile"
          value={formData.job_profile}
          onChange={handleChange}
          placeholder="Job Profile"
        />
        <label htmlFor="min_yoe"></label>
        <input
          type="text"
          name="min_yoe"
          id="min_yoe"
          placeholder="YOE"
          value={formData.min_yoe}
          onChange={handleChange}
        />
        <textarea
          name="job_desc"
          id="job_desc"
          cols="30"
          rows="10"
          value={formData.job_desc}
          onChange={handleChange}
          placeholder="Copy the Job Description here"
        />
      </div>
      <button className="app__form-submit" onClick={handleSubmit}>
        Generate Cover Letter
      </button>
      {showCoverLetter && (
        <div className="app__coverLetter-wrapper">
          <h3 className="coverLetter__head">Cover Letter</h3>
          <article className="coverLetter__text">{coverLetterText}</article>
        </div>
      )}
    </>
  );
}
