import React from "react";

import ExternalLink from "natrosity-components/ExternalLink";

const ContactPage = () => {
  return (
    <main>
      <h1>Contact Us</h1>
      <h2>
        Email:{" "}
        <ExternalLink href="mailto:mgmntnatrosity@gmail.com">
          mgmntnatrosity@gmail.com
        </ExternalLink>
      </h2>
    </main>
  );
};

export default ContactPage;
