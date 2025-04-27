import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../ProductPage.css"; // Ensure the CSS file is properly imported
import Footer from "../Footer";
import Contact from "../Contact";
import Header from "../Header";
const SIGNORVINOHome = () => {
  const [project, setProject] = useState(null);
  const scrollPage = () => {
    window.scrollTo({
      top: 300, // Scroll 500px down from the top
      left: 0, // Horizontal scroll position
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Scroll on DOMContentLoaded (when the component is mounted)
  scrollPage();
  // Fetch the project data from the JSON file
  useEffect(() => {
    fetch("/SIGNORVINOHome.json")
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error("Error fetching project data:", error));
    window.addEventListener("pageshow", scrollPage);

    return () => {
      window.removeEventListener("load", scrollPage);
      window.removeEventListener("pageshow", scrollPage);
    };
  }, []);

  if (!project) {
    return <div>Loading...</div>; // Display loading if project is not yet fetched
  }

  return (
    <div id="HeroSection" className="product-page">
      <Header />
      <motion.div
        className="page-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container1">
          <div>
            <motion.video
              src={project.videos?.banner || "/bouncebackdrinks_banner.png"} // Use optional chaining and a fallback video
              className="banner-video"
              autoPlay
              loop
              muted
              alt="banner video"
              initial={{ opacity: 0, scale: 0.8 }} // Initial state: reduced scale
              whileInView={{ opacity: 1, scale: 1 }} // Animation to full size and visibility
              transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition effect
            />
          </div>

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
            <div className="project-link">
              <a
                href={project.officialWebsiteLink}
                className="official-website-link"
              >
                Official Website ↗
              </a>
              <span className="nav-link">E-Commerce</span>
            </div>
          </AnimatedSection>

          {/* logo Image with Animation */}
          <AnimatedImage>
            <motion.img
              src={project.images.logo}
              className="banner-image"
              alt="logo"
              initial={{ opacity: 0, scale: 0.8 }} // Initial state: reduced scale
              whileInView={{ opacity: 1, scale: 1 }} // Animation to full size and visibility
              transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition effect
            />
          </AnimatedImage>

          {/* Banner Image Animation */}
          <AnimatedImage>
            <motion.img
              src={project.images.banner}
              className="banner-image"
              alt="Banner"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </AnimatedImage>

          {/* Gallery Images with Animation */}
          <AnimatedSection>
            <div className="image-gallery">
              {project.images.gallery.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-image"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Additional Content Animation */}
          <AnimatedSection>
            <div className="bg-gray-900 p-8">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="content">
                  <h2 className="section-headertitle">
                    {project.foundationTitle}
                  </h2>
                  <p>{project.foundationDescription}</p>
                </div>
                <div className="md:col-span-3">
                  <motion.img
                    src={project.images.gallery1}
                    className="banner-image"
                    alt="Last Banner"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="content">
              <h3>{project.projectDescription}</h3>
              <p>{project.Descriptiontwo}</p>
            </div>
          </AnimatedSection>

          {/* Additional Content Animation, Middel L Size 3 Image */}
          <AnimatedSection>
            <div className="bg-gray-900 p-8">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-3">
                  <motion.img
                    src={project.images.gallery2}
                    className="banner-image"
                    alt="Last Banner"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>

                {/* Image on the left (or top on mobile) and content on the right */}
                <AnimatedSection>
                  <div className="image-content-gallery">
                    <div className="image-side">
                      {project.images.gallery13
                        .slice(1, 2)
                        .map((image, index) => (
                          <motion.img
                            key={index}
                            src={image}
                            alt={`Gallery ${index + 2}`}
                            className="gallery-image"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                          />
                        ))}
                    </div>
                    <div className="content-side">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="section-headertitle">
                          {project.foundationTitleTwo}
                        </h2>
                        <p>{project.foundationDescriptionTwo}</p>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <div className="image-content-gallery">
                    <div className="content-side">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="section-headertitle">
                          {project.descriptionTitle}
                        </h2>
                        <p>{project.Descriptionthree}</p>
                      </motion.div>
                    </div>
                    <div className="image-side">
                      {project.images.gallery12
                        .slice(1, 2)
                        .map((image, index) => (
                          <motion.img
                            key={index}
                            src={image}
                            alt={`Gallery ${index + 2}`}
                            className="gallery-image"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                          />
                        ))}
                    </div>
                  </div>
                </AnimatedSection>

                <div className="md:col-span-3">
                  <motion.img
                    src={project.images.gallery3}
                    className="banner-image"
                    alt="Last Banner"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Titel and Description*/}
          <AnimatedSection>
            <div className="contenttwo">
              <h2 className="section-headertitle">
                {project.descriptionTitleThree}
              </h2>
              <p>{project.Descriptionfour}</p>
            </div>
          </AnimatedSection>

          {/* 2 Left and Right Side Image*/}
          <AnimatedSection>
            <div className="image-gallery">
              {project.images.gallery14.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-image"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gray-900 p-8">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-3">
                  <motion.img
                    src={project.images.gallery4}
                    className="banner-image"
                    alt="Last Banner"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </motion.div>
      <Contact />
      <Footer />
    </div>
  );
};

// This is a reusable animated section component
const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Separate AnimatedImage component for image animations
const AnimatedImage = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SIGNORVINOHome;
