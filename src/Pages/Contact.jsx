import React from "react";
import {contactDetails} from "../Details";

function Contact() {
  const {email} = contactDetails;
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
          Questions? Drop me a message
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
          <a href={`mailto:${email}`}>{email}</a>
        </h2>
      </div>
    </main>
  );
}

export default Contact;
