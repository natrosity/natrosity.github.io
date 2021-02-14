import { css } from "@emotion/react";
import React from "react";

const Button = (props) => {
  return (
    <div
      css={css`
        background-color: red;
        width: fit-content;
        padding: 1em;
      `}
    >
      {props.children}
    </div>
  );
};

export default Button;
