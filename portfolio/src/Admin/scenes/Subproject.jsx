import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./ContactUs.css"; // Reusing the same CSS styles

function Subproject() {
  const [formData, setFormData] = useState({
    productName: "",
    subtitle: "",
    description: "",
    services: "",
    industries: "",
    websiteLink: "",
    projectImage: null,
    subTitle: "",
    subDescription: "",
    images: "",
    enhancingData: "",
    enhancingDescription: "",
    productImages: "",
    colorPalette: null,
    fontImage: null,
    lastDescription: "",
  });

  const navigate = useNavigate(); // Initialize navigate

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
      [name]: files[0], // Handling file inputs
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission (API integration)
  };

  const handleBackClick = () => {
    navigate('/admin/dashboard'); // Navigate back to the admin dashboard
  };

  return (
    <section className="contact-section">
      <h2>Sub Product Details Form</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Product Name and Subtitle */}
        <div className="form-group">
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="form-input"
            placeholder="Product Name*"
            required
          />
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="form-input"
            placeholder="Subtitle"
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Description"
          />
        </div>

        {/* Services and Industries */}
        <div className="form-group">
          <textarea
            name="services"
            value={formData.services}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Services Provided"
          />
          <textarea
            name="industries"
            value={formData.industries}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Related Industries"
          />
        </div>

        {/* Website and Image */}
        <div className="form-group">
          <input
            type="url"
            name="websiteLink"
            value={formData.websiteLink}
            onChange={handleChange}
            className="form-input"
            placeholder="Website Link"
          />
          <input
            type="file"
            name="projectImage"
            onChange={handleFileChange}
            className="form-input"
            accept="image/*"
          />
        </div>

        {/* Additional Subsection Title, Description */}
        <div className="form-group">
          <input
            type="text"
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
            className="form-input"
            placeholder="Sub-section Title"
          />
          <textarea
            name="subDescription"
            value={formData.subDescription}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Sub-section Description"
          />
        </div>

        {/* Enhancing Data */}
        <div className="form-group">
          <textarea
            name="enhancingData"
            value={formData.enhancingData}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Enhancing Data"
          />
          <textarea
            name="enhancingDescription"
            value={formData.enhancingDescription}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Enhancing Description"
          />
        </div>

        {/* Product Images and Color Palette */}
        <div className="form-group">
          <textarea
            name="productImages"
            value={formData.productImages}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Product Images (comma-separated)"
          />
          <input
            type="file"
            name="colorPalette"
            onChange={handleFileChange}
            className="form-input"
            accept="image/*"
          />
        </div>

        {/* Font Image and Last Description */}
        <div className="form-group">
          <input
            type="file"
            name="fontImage"
            onChange={handleFileChange}
            className="form-input"
            accept="image/*"
          />
          <textarea
            name="lastDescription"
            value={formData.lastDescription}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Final Description"
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

export default Subproject;
