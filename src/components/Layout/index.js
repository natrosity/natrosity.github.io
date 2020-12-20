import React from "react";
import { Global, css } from "@emotion/react";

import AppHeader from "natrosity-components/AppHeader";
import AppFooter from "natrosity-components/AppFooter";
import { WHITE } from "natrosity-styles/colors";

const Layout = (props) => {
  return (
    <div className="app-layout">
      <Global
        styles={css`
          html {
            background: no-repeat linear-gradient(#000, #721b1b);
            color: ${WHITE};
            font-family: "-apple-system, Roboto, sans-serif, serif";
            height: 100%;
          }

          body {
            margin: 0;
            height: 100%;
          }

          // Set all parent containers to 100% height for the sticky footer.
          #___gatsby,
          #gatsby-focus-wrapper {
            height: 100%;
          }

          .app-layout {
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .page-contents {
            flex: 1 0 auto;
          }
        `}
      />
      <AppHeader />
      <div className="page-contents">{props.children}</div>
      <AppFooter />
    </div>
  );
};

export default Layout;
