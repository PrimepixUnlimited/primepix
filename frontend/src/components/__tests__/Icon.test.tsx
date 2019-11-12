// components/__tests__/Hello.tsx
import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";

import Icon from "../Icon";

describe("Icon snapshot", () => {
  it("renders correctly", () => {
    const icon = renderer.create(<Icon name="add-alarm" size={32} />).toJSON();
    expect(icon).toMatchSnapshot();
  });
});
