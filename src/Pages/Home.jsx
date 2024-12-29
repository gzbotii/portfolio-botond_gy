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
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div className="w-full md:w-7/10">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi 👋, <br></br> My name is{" "}
          <span ref={h12} className="bg-clip-text bg-gradient text-transparent">
            {name}
          </span>
        </h1>
        <h2
          ref={h13}
          className="pt-4 text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="w-1/2 md:w-full md:w-3/10 md:max-w-[30%] mt-[10vh] md:mt-0">
        <img
          ref={myImageRef}
          className="rounded-full md:w-auto md:ml-10"
          src={img}
          alt="Profile"
        />
      </div>
    </main>
  );
}

export default Home;
