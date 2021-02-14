import { css } from "@emotion/react";
import React from "react";
import { Link } from "gatsby";

const AppLogo = () => {
  return (
    <h1
      css={css`
        a {
          text-decoration: none;
        }
      `}
    >
      <Link to="/">Natrosity</Link>
    </h1>
  );
};

export default AppLogo;
