import { css } from "@emotion/react";
import React from "react";

import Button from "natrosity-components/Button";
import ExternalLink from "natrosity-components/ExternalLink";
import { PINK } from "natrosity-styles/colors";

const Headline = () => {
  return (
    <div className="headline">
      <h2>Out Now</h2>
      <h2
        css={css`
          color: ${PINK};
          font-size: 2.5rem;
        `}
      >
        No More Love Songs
      </h2>
      <Button>
        <ExternalLink
          href="https://open.spotify.com/album/4aYZIVxgqMZPrgQGRivxxw"
          target="_blank"
        >
          LISTEN NOW
        </ExternalLink>
      </Button>
    </div>
  );
};

export default Headline;
