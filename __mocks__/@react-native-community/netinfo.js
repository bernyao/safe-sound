// Jest mock for @react-native-community/netinfo
// Keeps unit tests from trying to access the native module.

const createListener = () => ({ remove: () => {} });

const NetInfo = {
  addEventListener: (listener) => {
    // Immediately report "online" by default.
    if (typeof listener === "function") {
      listener({ isConnected: true, isInternetReachable: true, type: "wifi" });
    }
    return createListener();
  },
  fetch: async () => ({
    isConnected: true,
    isInternetReachable: true,
    type: "wifi",
  }),
};

module.exports = NetInfo;
module.exports.default = NetInfo;
