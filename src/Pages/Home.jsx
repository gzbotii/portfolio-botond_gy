import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { personalDetails } from '../data/personal';

function Home() {
  const { name, tagline, img } = personalDetails;

  // Better ref names
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const profileImageRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animation config
    const duration = 1.5;
    const ease = 'power3.out';

    // Set initial states
    timeline
      .set([greetingRef.current, nameRef.current, taglineRef.current], {
        opacity: 0,
        x: '-100%',
      })
      .set(profileImageRef.current, {
        opacity: 0,
        x: '200%',
      })
      // Animate text elements together
      .to([greetingRef.current, nameRef.current, taglineRef.current], {
        x: 0,
        opacity: 1,
        duration,
        ease,
        stagger: 0.1,
      })
      // Animate image simultaneously
      .to(
        profileImageRef.current,
        {
          x: 0,
          opacity: 1,
          duration,
          ease,
        },
        '<'
      );

    // Cleanup function
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <main
      id="home"
      className="container mx-auto max-width flex flex-col md:flex-row justify-center items-center min-h-screen"
    >
      <div className="w-full md:w-7/10 text-left">
        <h1
          ref={greetingRef}
          data-test="main-heading"
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi 👋 <br /> My name is{' '}
          <span
            ref={nameRef}
            className="bg-clip-text bg-gradient text-transparent"
          >
            {name}
          </span>
        </h1>
        <h2
          ref={taglineRef}
          data-test="tagline"
          className="pt-8 text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="w-1/2 md:w-full md:w-3/10 md:max-w-[20%] mt-[10vh] md:mt-0 md:text-left mx-auto md:mx-0 md:ml-10">
        <img
          ref={profileImageRef}
          data-test="profile-image"
          className="rounded-full md:w-auto ml-auto md:ml-0 mr-auto md:mr-auto"
          src={img}
          alt="Profile"
        />
      </div>
    </main>
  );
}

export default Home;
