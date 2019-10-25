import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { HomeContainer } from "../styles";

test("HomeContainer renders", () => {
  const tree = renderer.create(<HomeContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
