import { css } from "@emotion/react";
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const SocialMediaLink = ({ imageLink }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "instagram/logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div>
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>
  );
};

export default SocialMediaLink;
