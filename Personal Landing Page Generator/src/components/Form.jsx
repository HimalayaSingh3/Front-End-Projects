// src/components/Form.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./components.css"

function Form({ setUserDetails }) {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [bio, setBio] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [education, setEducation] = useState("");
  const [profilePicBase64, setProfilePicBase64] = useState(null); // Store image as Base64
  const [resume, setResume] = useState(null);

  const navigate = useNavigate();

  // Convert image to Base64 string
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicBase64(reader.result); // Set image as base64 string
      };
      reader.readAsDataURL(file); // Convert to Base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resumeURL = resume ? URL.createObjectURL(resume) : null;

    setUserDetails({
      name,
      profession,
      bio,
      linkedin,
      github,
      instagram,
      education,
      profilePicBase64, // Pass the Base64 string
      resumeURL,
    });
    navigate("/preview");
  };

  return (
    <div className="forms">
      <div className="form">
      <h2>Create Your Landing Page</h2>
      <div className="input-form">
      <form onSubmit={handleSubmit}>
      <div>
          <label>Profile Picture: </label>
          <input type="file" onChange={handleProfilePicChange} accept="image/*" />
        </div>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Profession: </label>
          <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} required />
        </div>
        <div>
          <label>Bio: </label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} required />
        </div>
        <div>
          <label>Education: </label>
          <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} required />
        </div>
        
        <div>
          <label>Resume: </label>
          <input type="file" onChange={(e) => setResume(e.target.files[0])} accept=".pdf,.doc,.docx" />
        </div>
        <div>
          <label>LinkedIn: </label>
          <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </div>
        <div>
          <label>GitHub: </label>
          <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
        </div>
        <div>
          <label>Instagram: </label>
          <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
        </div>
        <button type="submit">Generate Page</button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default Form;
