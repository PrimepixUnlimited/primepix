// components/__tests__/Hello.tsx
import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";

import LoadingIndicator from "../LoadingIndicator";

describe("LoadingIndicator snapshot", () => {
  it("renders correctly", () => {
    const component = renderer.create(<LoadingIndicator loading />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it("hides correctly", () => {
    const component = renderer
      .create(<LoadingIndicator loading={false} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
