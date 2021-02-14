import * as React from "react";
import { Link } from "gatsby";

import Button from "natrosity-components/Button";

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>404 page not found</h1>
      <Button>
        <Link to="/">Go home</Link>
      </Button>
    </main>
  );
};

export default NotFoundPage;
