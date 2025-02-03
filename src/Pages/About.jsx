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
      <section className="py-8">
        <h3
          data-test="about-heading"
          className="text-2xl pb-8 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          About Me
        </h3>
        <p data-test="personal-details" className="text-content  lg:max-w-3xl">
          {personalDetails.about}
        </p>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p
            smooth={true}
            duration={500}
            className="pt-4 text-black lg:text-lg relative font-bold hover:cursor-pointer 
               inline-block before:content-[''] before:absolute before:block before:h-[2px] 
               before:bottom-0 before:left-0 before:bg-current 
               before:w-full lg:before:w-0 lg:hover:before:w-full 
               before:transition-all before:duration-300 before:origin-left"
          >
            Download my CV
          </p>
        </a>
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
