// components/__tests__/Hello.tsx
import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";

import Header from "../Header";

describe("Header snapshot", () => {
  it("renders correctly", () => {
    const header = renderer
      .create(<Header showBack showTitle title="Header" />)
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
