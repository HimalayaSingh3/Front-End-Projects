// src/components/PreviewPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./components.css"

function PreviewPage({ userDetails }) {
  const { name, profession, bio, linkedin, github, instagram, education, profilePicBase64, resumeURL } = userDetails;

  const generateHTML = () => {
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${name}'s Landing Page</title>
          <style>
             *{
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          text-decoration: none;
        }
        body {
          font-family: Arial, sans-serif;
          height: 100vh;
          width: 100%;
          text-align: center;
          background: #1b1919;
          color: rgb(0, 0, 0);
        }
        .previews{
          padding: 20px;
        }
        .line{
          border-bottom: 1px solid rgba(0, 0, 0, 0.24);
          width: 100%;
        }
         .preview{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid rgb(253, 253, 253);
                background: #ffffff;
                padding: 50px;
                gap: 22px;
                border-radius: 5px;
         }
         .preview h1{
          color:blue;
         }
         .preview h3{
          color: rgb(255, 196, 0);
         }
         .preview  img{
                 width: 180px;
                 height: 180px;
                 border-radius: 100%;
         }
         .preview .links{
                  display: flex;
                  flex-direction: column;
         }
         .links .input-links{
                   display: flex;
                   justify-content: center;
                   gap: 10px;
                   padding: 5px;
         }
         .input-links a{
                    padding: 5px;
                    color: white;
                    border-radius: 5px;
         }
         .input-links .linkedin{
                     background-color: blue;
         }
         .input-links .github{
                    background-color:black ;
         }
         .input-links .insta{
                    background-color: rgba(255, 3, 45, 0.781);
         }
         .resume-file{
          margin-top: 20px;
         }
         .resume .resume-file a{
                  padding: 15px;
                  border-radius: 5px;
                  color: white;
                  background:rgb(255, 196, 0);
         }
         a:hover{
               border: 1px solid rgb(255, 255, 255);
         }
         .rights{
          margin-top: 10px;
         }
          </style>
        </head>
        <body>
        <div class="previews">
          <div class="preview">
          ${profilePicBase64 ? `<img src="${profilePicBase64}" alt="Profile Picture" />` : ""}

          <h1>${name}</h1>

          <div class="line"></div>

          <div>
          <h3>${profession}</h3>
          </div>

          <div class="line"></div>

          <div>
          <p>${bio}</p>
          </div>

          <div class="line"></div>

          <div>
          ${education ? `<h4>Education:</h4><p>${education}</p>` : ""}
          </div>

          <div class="line"></div>
          
          <div class="links">
             <h4>Find me on:</h4>
             <div class="input-links">
             ${linkedin ? `<a href="${linkedin}" target="_blank" class="linkedin">LinkedIn</a><br />` : ""}
            ${github ? `<a href="${github}" target="_blank" class="github">GitHub</a><br />` : ""}
            ${instagram ? `<a href="${instagram}" target="_blank" class="insta">Instagram</a><br />` : ""}
             </div>
           </div>

           <div class="line"></div>


          ${resumeURL ?
            `
            <div class="resume">
          <h4>Resume:</h4>
          <div class="resume-file">
          <a href="${resumeURL} download="Resume">My Resume</a>
          </div>
        </div>` : ""}
        </div>
        <p>&copy; 2024 Himalaya Singh</p>
        </div>
</body>
</html>
    `;
    return htmlContent;
  };

  const downloadPage = () => {
    const element = document.createElement("a");
    const file = new Blob([generateHTML()], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = `${name}-landing-page.html`;
    document.body.appendChild(element); // Required for Firefox
    element.click();
  };

  return (
    <div className="previews">
          <div className="preview">
      {profilePicBase64 && (
        <div className="profile">
          <img src={profilePicBase64} alt="Profile" />
        </div>
      )}
      
      <h1>{name}</h1>

      <div class="line"></div>

      <h3>{profession}</h3>

      <div class="line"></div>

      <p>{bio}</p>

      <div class="line"></div>

      {education && (
        <div>
          <h4>Education:</h4>
          <p>{education}</p>
        </div>
      )}

<div class="line"></div>

      <div className="links">
        <h4>Find me on:</h4>
        <div className="input-links">
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">LinkedIn</a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer" className="github">GitHub</a>}
        {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer" className="insta">Instagram</a>}
        </div>
      </div>

      <div class="line"></div>

      {resumeURL && (
        <div className="resume">
          <h4>Resume:</h4>
          <div className="resume-file">
          <a href={resumeURL} download="Resume">My Resume</a>
          </div>
        </div>
      )}

      <br />
      <button onClick={downloadPage}>Download File</button>
      <br />
      <Link to="/">Go Back</Link>
    </div>
    </div>
  );
}

export default PreviewPage;
