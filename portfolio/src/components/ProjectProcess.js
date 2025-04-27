import React from "react";
import { motion } from "framer-motion";
import "./ProjectProcess.css";
import process from "../Image/process.jpg";

const processSteps = [
  {
    number: '01',
    title: 'User Requirements',
    description: 'Collecting project requirements involves identifying relevant users and gaining clarity on their needs and motivations.'
  },
  {
    number: '02',
    title: 'Research and Wireframes',
    description: 'Developing a design blueprint that offers an initial preview of the ultimate visual design appearance.'
  },
  {
    number: '03',
    title: 'Design and Development',
    description: "During development, we'll use the newest technologies for both the front and back ends to create a fully working online store that can change and grow easily."
  },
  {
    number: '04',
    title: 'Quality Assurance',
    description: 'Checking for mistakes and fixing them to make sure everything meets our quality standards.'
  },
  {
    number: '05',
    title: 'Deployment and Launch',
    description: "After the project is tested and approved, it's time to launch it for the world to see and use."
  },
  {
    number: '06',
    title: 'Monitoring and Optimization',
    description: "After we launch, we keep checking on it. We add new features and make it work better when"
  }
];

export default function ProjectProcess() {
  return (
    <div className="project-process">
      <div className="container">
        {" "}
        <div className="left-side">
          <h1>How we process through each project</h1>
          <p>
            We create engaging online experiences that grab attention and build
            strong connections. Our agency combines new ideas, planning, and
            skills to help you succeed on the internet.
          </p>
          <img src={process} className="about-image" />
        </div>
        <div className="right-side">
          <div className="process-card">
            {processSteps.map((step, index) => (
              <motion.div
              key={step.number}
              className="step-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2
              }}
            >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
