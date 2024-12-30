import React from "react";
import {contactDetails} from "../Details";

function Contact() {
  const {email} = contactDetails;
  return (
    <main className="container mx-auto my-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Questions? Drop me a message
      </h1>{" "}
      <h2 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}> {email} </a>
      </h2>
    </main>
  );
}

export default Contact;
