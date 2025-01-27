"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/portfolio.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Hotel Booking Application using Spring Boot and React",
    description: "Project 2 description",
    image: "/images/projects/hotel.jpg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/anmolsinghdz/Hotel-Booking-App-With-Spring-Boot-Spring-Security-React.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Product Management System",
    description: "Project 3 description",
    image: "/images/projects/product.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anmolsinghdz/Product-Management-System.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Weather App",
    description: "Project 4 description",
    image: "/images/projects/weather.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anmolsinghdz/Weather-App.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Video Streaming Application using Spring WebFlux",
    description: "Authentication and CRUD operations",
    image: "/images/projects/video.jpg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/anmolsinghdz/Video-Streaming-Application-using-Spring-WebFlux.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Fashion Recommendation System",
    description: "Project 5 description",
    image: "/images/projects/fashion.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://github.com/anmolsinghdz/Neural-Network-based-Wardrobe-Consultant.git",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Traffic Sign Recognition",
    description: "Project 5 description",
    image: "/images/projects/traffic.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/anmolsinghdz/Traffic-Sign-Recognition.git",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Jewellery Recommendation System",
    description: "Project 5 description",
    image: "/images/projects/jewel.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://github.com/anmolsinghdz/Jewellery-Recommendation-System.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
