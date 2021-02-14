import { css } from "@emotion/react";
import React from "react";
import { Link } from "gatsby";

const ITEMS = [
  { title: "About", to: "/about" },
  { title: "Contact", to: "/contact" },
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

          a {
            text-decoration: none;
          }
        `}
      >
        {ITEMS.map(({ title, to }, index) => {
          return (
            <li
              key={index}
              css={css`
                padding: 0em 1em 0em 1em;
              `}
            >
              <h2>
                <Link to={to}>{title}</Link>
              </h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppNavbar;
