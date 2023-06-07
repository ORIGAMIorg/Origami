"use client";
import { Layout } from "@/lib/antd";

export default function Content({ children }) {
  return (
    <Layout.Content
      style={{
        margin: "24px 16px 0",
        overflow: "initial",
      }}
    >
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: "#fff",
        }}
      >
        {children}
      </div>
    </Layout.Content>
  );
}
