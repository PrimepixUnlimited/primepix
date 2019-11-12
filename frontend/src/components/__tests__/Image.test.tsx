// components/__tests__/Hello.tsx
import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";

import Image from "../Image";

describe("Image snapshot", () => {
  it("renders correctly", () => {
    const component = renderer
      .create(
        <Image source={{ uri: "../../assets/images/primepix-logo.png" }} />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
