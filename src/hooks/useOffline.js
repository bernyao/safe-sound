import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

/**
 * useOffline
 * Returns true when we believe the user is offline.
 */
export default function useOffline() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const offline = !(
        state.isConnected && state.isInternetReachable !== false
      );
      setIsOffline(offline);
    });

    // Prime on mount
    NetInfo.fetch().then((state) => {
      const offline = !(
        state.isConnected && state.isInternetReachable !== false
      );
      setIsOffline(offline);
    });

    return () => unsubscribe();
  }, []);

  return isOffline;
}
