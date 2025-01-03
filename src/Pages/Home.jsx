import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import {personalDetails} from "../Details";

function Home() {
  const {name, tagline, img} = personalDetails;

  // Refs for animation
  const h11 = useRef(null);
  const h12 = useRef(null);
  const h13 = useRef(null);
  const myImageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(h11.current, {
      x: "-100%",
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
    })
      .from(
        h12.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myImageRef.current,
        {
          x: "200%",
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main
      id="home"
      className="container mx-auto max-width flex flex-col md:flex-row justify-center items-center min-h-screen"
    >
      <div className="w-full md:w-7/10 text-left">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi 👋 <br /> My name is{" "}
          <span ref={h12} className="bg-clip-text bg-gradient text-transparent">
            {name}
          </span>
        </h1>
        <h2
          ref={h13}
          className="pt-8 text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="w-1/2 md:w-full md:w-3/10 md:max-w-[20%] mt-[10vh] md:mt-0 md:text-left mx-auto md:mx-0 md:ml-10">
        <img
          ref={myImageRef}
          className="rounded-full md:w-auto ml-auto md:ml-0 mr-auto md:mr-auto"
          src={img}
          alt="Profile"
        />
      </div>
    </main>
  );
}

export default Home;
