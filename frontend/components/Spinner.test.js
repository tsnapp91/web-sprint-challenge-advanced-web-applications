// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from "react";
import Spinner from "./Spinner";
import { render } from "@testing-library/react";

test("sanity", () => {
  const { container } = render(<Spinner />);
});
