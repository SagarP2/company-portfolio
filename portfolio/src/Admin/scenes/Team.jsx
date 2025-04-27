import React, { useState } from "react";
import "./ContactUs.css"; // Reusing the same CSS styles


function Team() {
  const [formData, setFormData] = useState({
    projectName: "",
    projectImage: null,
    projectDescription: "",
    projectTechnologies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Handling file input for the image
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission (API integration)
  };

  return (
    <section className="contact-section">
      <h2>Create New Project</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Project Name */}
        <div className="form-group">
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="form-input"
            placeholder="Project Name*"
            required
          />
        </div>

        {/* Project Image */}
        <div className="form-group">
          <input
            type="file"
            name="projectImage"
            onChange={handleFileChange}
            className="form-input"
            accept="image/*"
            placeholder="Project Image"
          />
        </div>

        {/* Project Description */}
        <div className="form-group">
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Project Description"
          />
        </div>

        {/* Technologies Used */}
        <div className="form-group">
          <input
            type="text"
            name="projectTechnologies"
            value={formData.projectTechnologies}
            onChange={handleChange}
            className="form-input"
            placeholder="Technologies (comma-separated)"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="send-button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Team;
