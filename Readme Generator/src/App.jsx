import React, { useState } from 'react';
import FileDownload from 'js-file-download';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: "",
    installation: '',
    usage: '',
    contributing: '',
    license: 'MIT',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const readmeContent = generateREADME(formData);
    FileDownload(readmeContent, 'README.md');
  };

  const generateREADME = (data) => {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation
${data.technologies}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
${data.license}
    `;
  };


  return (
    <div className='readme'>
      <h1>README GENERATOR</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Project Title:
            <input type="text" name="title" onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea name="description" onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Technologies Used:
            <textarea name="technologies" onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Installation Instructions:
            <textarea name="installation" onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Usage:
            <textarea name="usage" onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Contributing:
            <textarea name="contributing" onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            License:
            <select name="license" onChange={handleChange}>
              <option value="MIT">This project is licensed under the MIT License.</option>
              <option value="Apache 2.0">This project is licensed under the Apache 2.0 License.</option>
              <option value="GPL 3.0">This project is licensed under the GPL 3.0 License.</option>
              <option value="EPL 2.0">This project is licensed under the Eclipse Public License 2.0.</option>
              <option value="None">None</option>
            </select>
          </label>
        </div>
        <div className="btn">
        <button type="submit">Generate README</button>
        </div>
      </form>
      <p className='rights'>Made by Himalaya Singh</p>
    </div>
  );
}

export default App;
