import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Project.css";
import { FaArrowRight } from "react-icons/fa";
const TABS = [
    "All",
    "E-Commerce",
    "UI Design",
    "Custom Development",
    "Branding",
];

const Project = () => {
  const [projectData, setProjectData] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const navigate = useNavigate(); // To programmatically navigate

  useEffect(() => {
    fetch("./Data.json")
      .then((response) => response.json())
      .then((data) => setProjectData(data.projects))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setVisibleProjects(6); // Reset visible projects on tab change
  };

  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter((project) => project.type === activeTab);

  const handleSeeMore = () => {
    navigate("/all-projects"); // Redirect to another page
  };

  return (
    <div id="projectSection" className="projects">
      <h2 className="section-headertitle">Check Out Our Projects</h2>

      {/* Tabs */}
      <div className="category_tabs">
        <ul className="tabs">
          {TABS.map((tab, index) => (
            <li
              key={index}
              className={`tab-pills ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects section */}
      <div className="section12">
        {filteredProjects.slice(0, visibleProjects).map((project, index) => {
          return (
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
          );
        })}
      </div>

      {/* See More Button for Redirection */}
      <div className="seemore">
        <li className="tab-pills" onClick={handleSeeMore}>
          See More
        </li>
      </div>
    </div>
  );
};

export default Project;
