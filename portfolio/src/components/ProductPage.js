import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ProductPage.css";
import Footer from "./Footer";
const ProductPage = () => {
  const [projects, setProjects] = useState([]);
  const [showContent, setShowContent] = useState(false);

  // Fetch the project data from the JSON file
  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        setShowContent(true);
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  if (!projects || projects.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="product-page">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className={`page-container ${showContent ? "show" : ""}`}
          initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
          animate={{ opacity: 1, scale: 1 }} // Animate to this state
          transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration and easing
        >
          <div className="container1">
            <AnimatedSection>
              <div className="published-tag">
                <span>PUBLISHED IN {project.publishedYear}</span>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h1 className="main-title">{project.title}</h1>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="subtitle">{project.subtitle}</h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="content-grid">
                <div className="description">
                  <p>{project.description}</p>
                </div>

                <div className="info-columns">
                  <div className="services">
                    <h3>SERVICES</h3>
                    <ul>
                      {project.services.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="industries">
                    <h3>INDUSTRIES</h3>
                    <ul>
                      {project.industries.map((industry, index) => (
                        <li key={index}>{industry}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="image-section">
                <div className="nav-bar">
                  <a href={project.officialWebsiteLink} className="official-website-link">
                    Official Website ↗
                  </a>
                  <span className="nav-link">E-Commerce</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Banner Image with Animation */}
            <AnimatedImage>
              <motion.img
                src={project.images.banner}
                className="banner-image"
                alt="Banner"
                initial={{ opacity: 0, scale: 0.8 }} // Initial state: reduced scale
                whileInView={{ opacity: 1, scale: 1 }} // Animation to full size and visibility
                transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition effect
              />
            </AnimatedImage>

            {/* Gallery Images with Staggered Animation */}
            <AnimatedSection>
              <div className="image-gallery">
                {project.images.gallery.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="gallery-image"
                    initial={{ opacity: 0, y: 50 }} // Start from below position
                    whileInView={{ opacity: 1, y: 0 }} // Animate to normal position and visibility
                    transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation based on index
                    whileHover={{ scale: 1.1, rotate: 2 }} // Slight rotation and scale up on hover
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gray-900 p-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="content">
                    <h1>{project.foundationTitle}</h1>
                    <p>{project.foundationDescription}</p>
                  </div>
                  <div className="md:col-span-3">
                    <motion.img
                      src={project.images.last}
                      className="banner-image"
                      alt="Last Banner"
                      initial={{ opacity: 0, x: -100 }} // Initial state: positioned to the left
                      whileInView={{ opacity: 1, x: 0 }} // Animate to normal position
                      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="content">
                <h3>{project.projectDescription}</h3>
              </div>
            </AnimatedSection>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// This is a reusable animated section component
const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start from lower position with zero opacity
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to normal position and full opacity when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation configuration
    >
      {children}
    </motion.div>
  );
};

// Separate AnimatedImage component for more control over image animations
const AnimatedImage = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}} // Trigger animation when in view
      transition={{ duration: 0.7, ease: "easeOut" }} // Configure timing and easing
    >
      {children}
    </motion.div>
  );
};
<Footer/>
export default ProductPage;
