import React from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import { AlertTriangle, RefreshCw, Send } from "lucide-react-native";

/**
 * ErrorBoundary
 * - Catches errors in the component tree and renders a fallback UI
 * - Neobrutalist design with a red card, error icon, clear messaging,
 *   and Retry / Report Issue actions.
 *
 * Props:
 * - children: React.ReactNode
 * - onRetry?: () => void
 * - onReport?: (error?: any, info?: any) => void
 * - fallbackMessage?: string (override default message)
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log to console for now; can be wired to a logging service
    console.error("ErrorBoundary caught an error:", error);
    console.error("Error info:", info);
    this.setState({ info });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, info: null });
    if (typeof this.props.onRetry === "function") {
      try {
        this.props.onRetry();
      } catch (e) {
        console.error("ErrorBoundary onRetry handler error:", e);
      }
    }
  };

  handleReport = () => {
    const { error, info } = this.state;
    if (typeof this.props.onReport === "function") {
      try {
        this.props.onReport(error, info);
      } catch (e) {
        console.error("ErrorBoundary onReport handler error:", e);
      }
      return;
    }
    // Default: attempt to open mailto with error summary
    try {
      const subject = encodeURIComponent("Safe+Sound App Error Report");
      const body = encodeURIComponent(
        `Something went wrong.\n\nError: ${String(
          error
        )}\n\nInfo: ${JSON.stringify(
          info
        )}\n\nPlease describe what you were doing when this happened.`
      );
      const mailto = `mailto:?subject=${subject}&body=${body}`;
      Linking.openURL(mailto).catch(() => {
        console.log("Unable to open mail app. Error details:", error, info);
      });
    } catch (e) {
      console.error("Failed to compose report:", e);
    }
  };

  render() {
    if (this.state.hasError) {
      const message = this.props.fallbackMessage || "Something went wrong";
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.header}>
              <AlertTriangle size={28} color="#ffffff" strokeWidth={2} />
              <Text style={styles.title}>{message}</Text>
            </View>
            <Text numberOfLines={3} style={styles.details}>
              The app hit an unexpected error. You can retry or report the
              issue.
            </Text>

            <View style={styles.actions}>
              <Pressable
                onPress={this.handleRetry}
                style={({ pressed }) => [
                  styles.btn,
                  styles.btnRetry,
                  pressed && styles.btnPressed,
                ]}
              >
                <RefreshCw size={18} color="#ffffff" strokeWidth={2} />
                <Text style={styles.btnText}>Retry</Text>
              </Pressable>
              <Pressable
                onPress={this.handleReport}
                style={({ pressed }) => [
                  styles.btn,
                  styles.btnReport,
                  pressed && styles.btnPressed,
                ]}
              >
                <Send size={18} color="#ffffff" strokeWidth={2} />
                <Text style={styles.btnText}>Report Issue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef3c7",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#ef4444", // red-500
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    color: "#ffffff",
    flex: 1,
  },
  details: {
    fontSize: 13,
    color: "#ffffff",
    lineHeight: 18,
    marginBottom: 12,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  btn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  btnRetry: {
    backgroundColor: "#f97316", // orange-500
  },
  btnReport: {
    backgroundColor: "#0d9488", // teal-600
  },
  btnPressed: {
    shadowOffset: { width: 1, height: 1 },
    elevation: 1,
  },
  btnText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 0.5,
  },
});

export default ErrorBoundary;
