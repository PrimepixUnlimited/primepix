// components/__tests__/Hello.tsx
import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";

import Checkbox from "../Checkbox";

describe("Checkbox snapshot", () => {
  it("renders correctly", () => {
    const checkbox = renderer
      .create(
        <Checkbox
          checked={true}
          onPress={() => {}}
          title="Are you an artist?"
        />
      )
      .toJSON();
    expect(checkbox).toMatchSnapshot();
  });
});
