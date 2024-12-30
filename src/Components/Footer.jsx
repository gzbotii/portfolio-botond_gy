import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto py-4 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Made by
        <span className="font-medium"> gzbotii </span> with{" "}
        <span className="text-gradient font-medium"> React </span> &{" "}
        <span className="text-gradient font-medium"> Tailwind </span>{" "}
        <span>and occasional debugging tears. Thanks for PwanMG.</span>
      </p>{" "}
    </footer>
  );
}
export default Footer;
