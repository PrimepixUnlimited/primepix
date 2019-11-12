// components/__tests__/Hello.tsx
import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";

import Heading from "../Heading";

describe("Heading snapshot", () => {
  it("renders correctly", () => {
    const heading = renderer
      .create(<Heading size="h2">Heading</Heading>)
      .toJSON();
    expect(heading).toMatchSnapshot();
  });
});
