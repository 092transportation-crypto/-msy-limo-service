import { useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_BACKEND_URL || "";

/**
 * Renders its children (the chat widget) only after GET /api/chat reports
 * that an Anthropic API key is configured. Until then the widget stays
 * hidden, so visitors never open a chat that can only say "unavailable".
 * Any failure (no fetch, network error, non-200) keeps it hidden.
 */
export default function ChatGate({ children }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof fetch !== "function") return undefined;
    let active = true;
    fetch(`${API_BASE}/api/chat`, { method: "GET", headers: { Accept: "application/json" } })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (active && data && data.enabled === true) setEnabled(true);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return enabled ? children : null;
}
