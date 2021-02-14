import React from "react";
import { css } from "@emotion/react";

const ITEMS = [
  { title: "Discography" },
  { title: "About" },
  { title: "Contact" },
];

const AppNavbar = () => {
  return (
    <div>
      <ul
        css={css`
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          list-style: none;
        `}
      >
        {ITEMS.map((item, index) => {
          return (
            <li
              key={index}
              css={css`
                padding: 0em 1em 0em 1em;
              `}
            >
              <h2>{item.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppNavbar;
