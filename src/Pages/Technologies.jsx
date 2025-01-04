import React from "react";
import {techStackDetails} from "../Details";

function Technologies() {
  const {
    react,
    python,
    tailwind,
    cypress,
    selenium,
    vscode,
    chatgpt,
    github,
    locust,
    postman,
    figma,
    jira,
    gsheet,
    gsap,
    js,
  } = techStackDetails;
  return (
    <main
      id="technologies"
      className="container section mx-auto max-width pt-10 pb-20 "
    >
      <section>
        <h4 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h4>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={react} title="React" alt="react" className="md:h-24" />
        <img src={js} title="JS" alt="JavaScript" className="md:h-24" />
        <img src={gsap} title="GSAP" alt="GSAP" className="md:h-24" />
        <img
          src={cypress}
          title="Cypress"
          alt="cypress"
          className="md:md:h-24"
        />
        <img src={locust} title="Locust" alt="locust" className="md:h-24" />
        <img
          src={tailwind}
          title="Tailwind CSS"
          alt="tailwind css"
          className="md:h-24"
        />
        <img
          src={selenium}
          title="Selenium"
          alt="Selenium"
          className="md:h-24"
        />
        <img src={python} title="Python" alt="Python" className="md:h-24" />
      </section>
      <section>
        <h5 className="text-2xl pt-10 md:pt-24 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h5>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img
          src={vscode}
          title="Visual Studio Code"
          alt=""
          className="md:h-24"
        />
        <img src={github} title="Github" alt="Github" className="md:h-24" />
        <img src={chatgpt} title="ChatGPT" alt="ChatGPT" className="md:h-24" />
        <img src={figma} title="Figma" alt="Figma" className="md:h-24" />
        <img src={jira} title="Jira" alt="Jira" className="md:h-24" />
        <img src={postman} title="Postman" alt="Postman" className="md:h-24" />
        <img
          src={gsheet}
          title="Google Sheet"
          alt="Google Sheet"
          className="md:h-24"
        />
      </section>
    </main>
  );
}

export default Technologies;
