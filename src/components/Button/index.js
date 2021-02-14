import { css } from "@emotion/react";
import React from "react";

const Button = (props) => {
  return (
    <div
      css={css`
        background-color: red;
        display: flex;
        width: fit-content;
        padding: 1rem;

        a {
          text-decoration: none;
        }
      `}
    >
      {props.children}
    </div>
  );
};

export default Button;
