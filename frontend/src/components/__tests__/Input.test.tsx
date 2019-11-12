// components/__tests__/Hello.tsx
import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";

import Input from "../Input";

describe("Input snapshot", () => {
  it("renders correctly", () => {
    const component = renderer
      .create(
        <Input
          label="Expiry month"
          leftIconName="calendar"
          leftIconType="material-community"
          onChangeText={() => {}}
          placeholder="MM"
          value={"test"}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
