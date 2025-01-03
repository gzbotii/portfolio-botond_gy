import React from "react";
import Project from "../Components/Project";
import {projectDetails, personalProjectDetails} from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading section dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">
          Key projects I’ve contributed to as a Technical Project Manager, QA
          Analyst, and Software Developer, highlighting my commitment to
          delivering exceptional results through collaboration, technical
          expertise, and attention to detail.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
      <section>
        <h2 className="text-2xl text-dark-heading section dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Perosnal Projects
        </h2>
        <p className="text-content py-8 lg:max-w-3xl">
          Exploring new technologies and honing my skills, these projects
          reflect my journey in web development and a passion for learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            personalProjectDetails.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
