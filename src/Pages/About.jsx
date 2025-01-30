import React from "react";
import Work from "../Components/Work";
import {
  personalDetails,
  workDetails,
  eduDetails,
  courseDetails,
} from "../Details";

function About() {
  return (
    <main
      id="about"
      className="container section mx-auto max-width pt-10 pb-20 "
    >
      <section>
        <h3
          data-test="about-heading"
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          About Me
        </h3>
        <p
          data-test="personal-details"
          className="text-content py-8 lg:max-w-3xl"
        >
          {personalDetails.about}
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mb-2 md:mb-4 mt-5 md:mt-6 px-3 py-1.5 border-2 border-dark-heading text-dark-heading bg-white rounded-lg transition-all duration-300 hover:bg-dark-heading hover:text-white cursor-pointer">
              Download my CV
            </button>
          </a>
        </p>
      </section>

      <section data-test="work-experience">
        <h4 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h4>

        {React.Children.toArray(
          workDetails.map(({Position, Company, Location, Type, Duration}) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h4 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h4>

        {React.Children.toArray(
          eduDetails.map(({Position, Company, Location, Type, Duration}) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h5 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Courses
        </h5>
        {React.Children.toArray(
          courseDetails.map(({Position, Company, Location, Type, Duration}) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
