import Project from "@/core/app/components/Project";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: `Learn Programming App`,
      url: "http://yahyasopian.github.io/learn-programming-app",
      imageUrl: "/project-thumbnail-1.png",
    },
    {
      title: `Design to Code with Locofy`,
      url: "http://art-home-locofy.web.app/",
      imageUrl: "/project-thumbnail-2.png",
    },
  ];
  return (
    <div id="projects">
      <h2 className="font-extrabold text-orange-500 text-3xl text-center mb-7">Projects</h2>
      <div className="projects-container mb-24">
        <Project projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
