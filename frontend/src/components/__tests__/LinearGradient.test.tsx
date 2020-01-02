// components/__tests__/Hello.tsx
import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";
import { Text } from "react-native";

import LinearGradient from "../LinearGradient";

describe("LinearGradient snapshot", () => {
  it("renders correctly", () => {
    const component = renderer
      .create(
        <LinearGradient>
          <Text>Test</Text>
        </LinearGradient>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
