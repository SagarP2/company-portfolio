import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import MetricsContainer from "./MetricsContainer"; // Import MetricsContainer

const Hero = () => {
  const metrics = [
    { value: 280, label: "Stores Optimized", suffix: "+" },
    {
      value: 87,
      label: "Increased In Sales For Clients",
      prefix: "$",
      suffix: "m",
    },
    { value: 7, label: "Years Of Experience", suffix: "+" },
    { value: 15, label: "Expert Vetted Devs (Top 3%)", suffix: "+" },
  ];

  return (
    <motion.section
      id="HeroSection"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Welcome to <br /> RabbitCode
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Take your business to the next level with high-converting Shopify
          stores! We're a trusted partner to high-growth startups as well as
          large public enterprises.
        </motion.p>
      </div>

      <MetricsContainer metrics={metrics} />
    </motion.section>
  );
};

export default Hero;
