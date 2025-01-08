import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A complete e-commerce solution with a dynamic frontend and robust backend built using Django, DRF, and SQLite3.",
    technologies: ["Django", "DRF", "SQLite3"],
  },
  {
    title: "Event Management System",
    description:
      "An API backend for managing events, participants, and schedules using Django & DRF.",
    technologies: ["Django", "DRF"],
  },
  {
    title: "Weather App",
    description:
      "A responsive web app that fetches weather data using a third-party API.",
    technologies: ["React", "API"],
  },
  {
    title: "Todo List App",
    description: "A simple and functional todo app with a modern UI.",
    technologies: ["React"],
  },
  {
    title: "Quiz API",
    description: "A RESTful API for creating and managing quizzes.",
    technologies: ["Express.js"],
  },
  {
    title: "Movie Recommendation API",
    description:
      "An intelligent API recommending movies based on user preferences.",
    technologies: ["Express.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="Projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
