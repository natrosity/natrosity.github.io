import React from "react";
import { Global, css } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import AppHeader from "natrosity-components/AppHeader";
import AppFooter from "natrosity-components/AppFooter";
import { DEFAULT_LINK_COLOR, WHITE } from "natrosity-styles/colors";

const Layout = (props) => {
  // See https://www.gatsbyjs.com/plugins/gatsby-background-image/
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpeg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <div className="app-layout">
      <Global
        styles={css`
          html {
            color: ${WHITE};
            font-family: "Garamond, sans-serif, serif, Roboto";
            height: 100%;
          }

          body {
            margin: 0;
            height: 100%;
          }

          // Set all parent containers to 100% height for the sticky footer.
          #___gatsby,
          #gatsby-focus-wrapper,
          .app-layout {
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .page-contents {
            flex: 1 0 auto;
            padding: 5em 10em 5em 10em;
          }

          a {
            color: ${DEFAULT_LINK_COLOR};
          }

          h1 {
            font-size: 1.5rem;
          }

          h2 {
            font-size: 1.2rem;
          }

          h1,
          h2 {
            margin: 0;
            font-weight: 400;
          }
        `}
      />
      <AppHeader />
      <BackgroundImage
        Tag="div"
        className="page-contents"
        fluid={imageData}
        backgroundColor={`#040e18`}
      >
        {props.children}
      </BackgroundImage>
      <AppFooter />
    </div>
  );
};

export default Layout;
