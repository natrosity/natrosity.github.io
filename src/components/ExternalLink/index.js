import * as React from "react";

// Safe external link (anchor) with default styling
const ExternalLink = (props) => {
  return (
    <a rel="norefferer noopener" {...props}>
      {props.children}
    </a>
  );
};

export default ExternalLink;
