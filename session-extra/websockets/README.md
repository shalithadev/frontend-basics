# Using websockets with React and Next.js

Overview

WebSockets provide a full-duplex channel between client and server for low-latency, real-time communication. In Next.js apps it’s common to run the WebSocket server separately (or use a managed service) and have React/Next.js clients connect to it. Serverless API routes are usually not suitable for long-lived socket connections.

Architecture choices

- External WebSocket server (recommended): run a small Node service (ws, uWebSockets, socket.io, etc.) or use a managed provider (Pusher, Ably).
- Co-located with Next.js (only if you control a long-running Node process): attach a ws server to the underlying HTTP server via a custom server.
- Socket protocol: raw WebSocket for lowest overhead, socket.io for fallbacks, events, and useful client APIs.

Minimal ws server (Node + ws)

```js
// server/index.js
const http = require("http");
const WebSocket = require("ws");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws, req) => {
  console.log("client connected");

  ws.on("message", (msg) => {
    console.log("received", msg.toString());
    // Echo JSON back
    try {
      const obj = JSON.parse(msg);
      ws.send(JSON.stringify({ echo: obj }));
    } catch {
      ws.send("invalid json");
    }
  });

  ws.on("close", () => console.log("client disconnected"));
  ws.send(JSON.stringify({ hello: "world" }));
});

server.listen(3001, () => console.log("ws server running on :3001"));
```

React / Next.js client: simple hook

```tsx
// hooks/useWebSocket.tsx
import { useEffect, useRef, useState, useCallback } from "react";

export function useWebSocket(url: string) {
  const wsRef = useRef<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.addEventListener("open", () => setConnected(true));
    ws.addEventListener("close", () => setConnected(false));
    ws.addEventListener("message", (e) => {
      try {
        setMessages((m) => [...m, JSON.parse(e.data)]);
      } catch {
        setMessages((m) => [...m, e.data]);
      }
    });

    return () => {
      ws.close();
      wsRef.current = null;
    };
  }, [url]);

  const send = useCallback((data: any) => {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN) return false;
    ws.send(typeof data === "string" ? data : JSON.stringify(data));
    return true;
  }, []);

  return { connected, messages, send };
}
```

Using the hook in a component

```tsx
// components/Chat.tsx
import React, { useState } from "react";
import { useWebSocket } from "../hooks/useWebSocket";

export default function Chat() {
  const { connected, messages, send } = useWebSocket("ws://localhost:3001");
  const [text, setText] = useState("");

  return (
    <div>
      <div>Status: {connected ? "connected" : "disconnected"}</div>
      <ul>
        {messages.map((m, i) => (
          <li key={i}>{JSON.stringify(m)}</li>
        ))}
      </ul>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          send({ msg: text });
          setText("");
        }}
      >
        Send
      </button>
    </div>
  );
}
```

Reconnection and heartbeat

- Implement exponential backoff reconnection in the hook.
- Send periodic ping frames or app-level ping messages to detect stale connections.
- Close and reopen socket on network changes.

Authentication & security

- Avoid sending secrets directly over query strings. Use short-lived tokens (JWT) or an authenticated handshake.
- Use WSS (TLS) in production.
- Validate and rate-limit messages server-side.

Next.js specifics and deployment

- If deploying on platforms with serverless functions (Vercel/Lambda), prefer an external WebSocket server or a managed realtime service.
- If you run Next.js in a self-hosted Node process, you can attach a WebSocket server to the same HTTP server — but ensure scalability and sticky sessions if using multiple instances.

When to use socket.io

- Use socket.io if you want fallbacks (long-polling), built-in reconnection, rooms, and a rich client/server API. For raw low-latency needs, use ws or uWebSockets.

Quick tips

- Keep messages small and use binary format (e.g., protobuf/MessagePack) if throughput is large.
- Keep socket logic in hooks and contexts so components stay decoupled.
- Test under load and monitor connection counts and memory.

This provides a minimal, practical path to add WebSocket-driven realtime features to a React + Next.js app while avoiding common deployment pitfalls.
