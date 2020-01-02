// components/__tests__/Hello.tsx
import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";
import { Text } from "react-native";

import Panel from "../Panel";

describe("Panel snapshot", () => {
  it("renders `successful` correctly", () => {
    const component = renderer
      .create(
        <Panel type="success">
          <Text>Test</Text>
        </Panel>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it("renders `error` correctly", () => {
    const component = renderer
      .create(
        <Panel type="error">
          <Text>Test</Text>
        </Panel>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
