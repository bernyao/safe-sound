import React from "react";
import renderer, { act } from "react-test-renderer";

import HomeScreen from "../src/screens/HomeScreen";
import { storage } from "../src/utils/storage";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
    navigate: jest.fn(),
  }),
}));

jest.mock("../src/utils/storage", () => {
  const actual = jest.requireActual("../src/utils/storage");
  return {
    ...actual,
    storage: {
      ...actual.storage,
      getRecentSearches: jest.fn(async () => ["cpr", "burns"]),
      getHideRecentSearches: jest.fn(async () => true),
      saveOfflineData: jest.fn(async () => {}),
      setHideRecentSearches: jest.fn(async () => {}),
    },
  };
});

jest.mock("../src/context/LanguageContext", () => ({
  useLanguage: () => ({
    translateGuide: (g) => g,
    translateCategory: (c) => c,
  }),
}));

describe("HomeScreen recent searches gating", () => {
  it("does not render Recent Searches when hideRecentSearches is true", async () => {
    let tree;

    await act(async () => {
      tree = renderer.create(
        <HomeScreen navigation={{ navigate: jest.fn() }} />
      );
    });

    const textNodes = tree.root.findAllByType(require("react-native").Text);
    const visibleText = textNodes
      .map((n) =>
        typeof n.props.children === "string" ? n.props.children : ""
      )
      .join(" ");

    // Should have queried the persisted flag.
    expect(storage.getHideRecentSearches).toHaveBeenCalled();

    // The translated label is used, but we can safely assert the section doesn't appear
    // by checking for the raw English fallback in case translation isn't loaded in this unit test.
    expect(visibleText.toLowerCase()).not.toContain("recent searches");
  });
});
