import React from 'react';
import { techStackDetails } from '../data/assets';

function Technologies() {
  const {
    react,
    python,
    tailwind,
    cypress,
    selenium,
    vscode,
    github,
    locust,
    postman,
    figma,
    jira,
    gsheet,
    gsap,
    vue,
    ts,
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
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 [&_img]:w-16 [&_img]:h-16 [&_img]:object-contain">
        <img src={react} title="React" alt="react" />
        <img src={ts} title="TypeScript" alt="TypeScript" />
        <img src={vue} title="Vue.js" alt="vue.js" />
        {/* <img src={js} title="JS" alt="JavaScript" /> */}
        <img src={gsap} title="GSAP" alt="GSAP" />
        <img src={cypress} title="Cypress" alt="cypress" />
        <img src={locust} title="Locust" alt="locust" />
        <img src={tailwind} title="Tailwind CSS" alt="tailwind css" />
        <img src={selenium} title="Selenium" alt="Selenium" />
        <img src={python} title="Python" alt="Python" />
      </section>
      <section>
        <h5 className="text-2xl pt-10 md:pt-24 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h5>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 [&_img]:w-16 [&_img]:h-16 [&_img]:object-contain">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={github} title="Github" alt="Github" />
        {/* <img src={chatgpt} title="ChatGPT" alt="ChatGPT" /> */}
        <img src={figma} title="Figma" alt="Figma" />
        <img src={jira} title="Jira" alt="Jira" />
        <img src={postman} title="Postman" alt="Postman" />
        <img src={gsheet} title="Google Sheet" alt="Google Sheet" />
      </section>
    </main>
  );
}

export default Technologies;
