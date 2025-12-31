import React from "react";
import renderer from "react-test-renderer";

import App from "../App";

describe("smoke", () => {
  it("renders the app without crashing", () => {
    const tree = renderer.create(<App />);
    expect(tree).toBeTruthy();
  });
});
