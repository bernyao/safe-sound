import React from "react";
import renderer, { act } from "react-test-renderer";

// Mock the exact module used by SplashScreen: src/utils/storage
jest.mock("../src/utils/storage", () => ({
  storage: {
    getOnboardingCompleted: jest.fn(),
  },
}));

import { storage } from "../src/utils/storage";
import SplashScreen from "../src/screens/SplashScreen";

describe("onboarding gating", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  async function flushMicrotasks() {
    // Let the promise chain inside SplashScreen run.
    await Promise.resolve();
    await Promise.resolve();
  }

  async function flushTimersAndMicrotasks() {
    // Run the setTimeout callback, then let the awaited getOnboardingCompleted()
    // resolve, then run any follow-up microtasks.
    jest.runOnlyPendingTimers();
    await flushMicrotasks();
  }

  it("routes to onboarding when not completed", async () => {
    storage.getOnboardingCompleted.mockResolvedValue(false);

    const navigation = { reset: jest.fn() };

    await act(async () => {
      renderer.create(<SplashScreen navigation={navigation} />);
    });

    await act(async () => {
      jest.advanceTimersByTime(950);
      await flushTimersAndMicrotasks();
    });

    expect(navigation.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{ name: "OnboardingWelcome" }],
    });
  });

  it("routes to MainTabs when completed", async () => {
    storage.getOnboardingCompleted.mockResolvedValue(true);

    const navigation = { reset: jest.fn() };

    await act(async () => {
      renderer.create(<SplashScreen navigation={navigation} />);
    });

    await act(async () => {
      jest.advanceTimersByTime(950);
      await flushTimersAndMicrotasks();
    });

    expect(navigation.reset).toHaveBeenCalledWith({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  });
});
