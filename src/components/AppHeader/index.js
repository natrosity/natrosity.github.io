import React from "react";
import { css } from "@emotion/react";

import AppNavbar from "natrosity-components/AppNavbar";
import AppLogo from "natrosity-components/AppLogo";
import { HEADER_FOOTER_FRAGMENT } from "natrosity-styles/fragments";

const AppHeader = () => {
  return (
    <div
      css={css`
        ${HEADER_FOOTER_FRAGMENT};
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0.2em 6em 0.2em 6em;
      `}
    >
      <AppLogo />
      <AppNavbar />
    </div>
  );
};

export default AppHeader;
