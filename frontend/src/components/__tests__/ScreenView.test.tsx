// components/__tests__/Hello.tsx
import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";
import { Text } from "react-native";

import ScreenView from "../ScreenView";

describe("ScreenView snapshot", () => {
  it("renders correctly", () => {
    const component = renderer
      .create(
        <ScreenView heading="Test">
          <Text>Test</Text>
        </ScreenView>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it("renders correctly without padding", () => {
    const component = renderer
      .create(
        <ScreenView heading="Test" noPadding>
          <Text>Test</Text>
        </ScreenView>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
