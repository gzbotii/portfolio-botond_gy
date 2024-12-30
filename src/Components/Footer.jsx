import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto py-4 fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Crafted by
        <span className="font-bold text-gradient"> gzbotii </span> with{" "}
        <span className="font-bold"> React</span>,
        <span className="font-bold"> Tailwind </span>{" "}
        <span>and occasional debugging tears.</span>
      </p>{" "}
    </footer>
  );
}
export default Footer;
