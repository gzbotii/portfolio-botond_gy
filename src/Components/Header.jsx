import React, {useState, useRef, useEffect} from "react";
import {Link} from "react-scroll";
import {socialMediaUrl} from "../Details";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const {linkedin, github, instagram} = socialMediaUrl;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!navRef.current || !hamburgerRef.current) return;
      if (
        !navRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-dark-mode">
      <div className="max-width container mx-auto">
        <div className="flex items-center justify-between py-4 md:py-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            aria-label="Site logo"
            role="button"
            title="Site logo"
          >
            <img
              className="h-10"
              src={require("../assets/gzbotii.png")}
              alt="logo"
            />
          </Link>
          <div
            ref={hamburgerRef}
            onClick={toggleClass}
            className="cursor-pointer md:hidden"
          >
            <svg
              className="stroke-dark-heading dark:stroke-white"
              width="25"
              height="20"
              viewBox="0 0 16 13"
            >
              <path
                d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <nav
            ref={navRef}
            className={`
              absolute md:static
              top-full left-0 right-0
              md:flex md:items-center
              ${
                isOpen
                  ? "translate-y-0 opacity-100 visible max-h-[800px]"
                  : "translate-y-[-10px] opacity-0 invisible max-h-0"
              }
              transform transition-all duration-300 ease-in-out
              md:transform-none md:transition-none md:opacity-100 md:visible md:max-h-full
              md:translate-y-0 md:backdrop-blur-none md:bg-transparent md:shadow-none
              text-center
              backdrop-blur-sm bg-white/70 dark:bg-dark-mode/70
              shadow-lg
            `}
          >
            <ul className="dark:text-light-content hover:cursor-pointer font-medium md:flex items-center md:space-x-5 md:mr-10">
              <li className="pb-4 md:pb-0 text-lg">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={toggleClass}
                  className="relative font-medium opacity-75 hover:opacity-100 before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
                  aria-label="Navigate to Home section"
                  title="Navigate to Home section"
                  role="button"
                >
                  Home
                </Link>
              </li>
              <li className="pb-4 md:pb-0 text-lg">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={toggleClass}
                  className="relative font-medium opacity-75 hover:cursor-pointer hover:opacity-100 before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
                  aria-label="Navigate to About section"
                  title="Navigate to About section"
                  role="button"
                >
                  About
                </Link>
              </li>
              <li className="pb-4 md:pb-0 text-lg">
                <Link
                  to="technologies"
                  smooth={true}
                  duration={500}
                  onClick={toggleClass}
                  className="relative font-medium opacity-75 hover:cursor-pointer hover:opacity-100 before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
                  aria-label="Navigate to Technologies section"
                  title="Navigate to Technologies section"
                  role="button"
                >
                  Technologies
                </Link>
              </li>
              <li className="pb-4 md:pb-0 text-lg">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={toggleClass}
                  className="relative font-medium opacity-75 hover:cursor-pointer hover:opacity-100 before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
                  aria-label="Navigate to Projects section"
                  title="Navigate to Projects section"
                  role="button"
                >
                  Projects
                </Link>
              </li>
              <li className="pb-4 md:pb-0 text-lg">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={toggleClass}
                  className="relative font-medium opacity-75 hover:cursor-pointer hover:opacity-100 before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-current before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"
                  aria-label="Navigate to Contact section"
                  title="Navigate to Contact section"
                  role="button"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="flex justify-evenly items-center my-10 mx-12 md:my-0 md:space-x-5 md:mr-5">
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  alt="LinkedIn"
                  className="group"
                >
                  <svg
                    className="dark:fill-light-heading fill-dark-heading transition-all duration-300 group-hover:invert"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                  >
                    <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
                  </svg>
                  <span className="sr-only">Visit my LinkedIn profile</span>
                </a>
              </li>
              <li>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  alt="Instagram"
                  className="group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 90 90"
                    width="32"
                    height="32"
                    role="presentation"
                    className="dark:fill-light-heading fill-dark-heading transition-all duration-300 group-hover:invert"
                  >
                    <path d="M60.961 31.655c0-1.437-1.165-2.602-2.602-2.602s-2.602 1.165-2.602 2.602 1.165 2.602 2.602 2.602 2.602-1.165 2.602-2.602z" />
                    <path d="M45 33.079c-6.584 0-11.921 5.337-11.921 11.921 0 1.646.334 3.214.937 4.64.603 1.426 1.476 2.711 2.555 3.789 2.157 2.157 5.138 3.492 8.43 3.492s6.272-1.334 8.43-3.492c1.079-1.079 1.952-2.363 2.555-3.789.603-1.426.937-2.994.937-4.64 0-6.584-5.337-11.921-11.921-11.921z" />
                    <path d="M45 0C20.147 0 0 20.147 0 45s20.147 45 45 45 45-20.147 45-45S69.853 0 45 0zM70 55.238C70 63.391 63.391 70 55.238 70H34.762C26.609 70 20 63.391 20 55.238V34.762c0-3.057.929-5.897 2.521-8.253C25.174 22.582 29.666 20 34.762 20h20.477c5.095 0 9.588 2.582 12.241 6.508 1.592 2.356 2.521 5.196 2.521 8.253v20.477z" />
                  </svg>
                  <span className="sr-only">Visit my Instagram page</span>
                </a>
              </li>
              <li>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer noopener"
                  alt="Github"
                  className="group"
                >
                  <svg
                    className="dark:fill-light-heading fill-dark-heading transition-all duration-300 group-hover:invert"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                    />
                  </svg>
                  <span className="sr-only">Visit my GitHub page</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
