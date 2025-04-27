import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";

const AllProjects = () => {
  const [projectData, setProjectData] = useState([]);
  const [activeTab, setActiveTab] = useState("All"); // Use activeTab

  const TABS = [
    "All",
    "E-Commerce",
    "UI Design",
    "Custom Development",
    "Branding",
  ];

  useEffect(() => {
    fetch("./Data.json")
      .then((response) => response.json())
      .then((data) => setProjectData(data.projects))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  // Filter projects based on the activeTab
  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter((project) => project.type === activeTab); // Use type for filtering

  return (
    <div className="projects">
      <Header />

      <div className="project-container">
        <h2 className="section-headertitle">All Projects</h2>

        {/* Tab Navigation */}
        <div className="category_tabs">
          <ul className="tabs">
            {TABS.map((tab) => (
              <li
                key={tab}
                className={`tab-pills ${activeTab === tab ? "active" : ""}`} // Active tab styling
                onClick={() => setActiveTab(tab)} // Set active tab on click
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Grid */}
        <div className="section12">
          {filteredProjects.map((project, index) => (
            <div className="card1">
              <img className="image" src={project.image} />
              <div className="info_wrap">
                <Link
                  to={project.link} // Use the link property from the data file
                  key={index}
                  className="card-link"
                >
                  <h3 className="title">{project.title}</h3>
                  <FaArrowRight className="icon" />{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default AllProjects;
