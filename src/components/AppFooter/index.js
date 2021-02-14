import React from "react";
import { css } from "@emotion/react";

import { HEADER_FOOTER_FRAGMENT } from "natrosity-styles/fragments";

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <h1
      css={css`
        ${HEADER_FOOTER_FRAGMENT};
        // Sticky footer
        margin-top: auto;
        flex-shrink: 0;
        text-align: center;
        padding: 1em 0 1em 0;
        font-size: 0.9rem;
      `}
    >
      Copyright © {currentYear} Natrosity
    </h1>
  );
};

export default AppFooter;
