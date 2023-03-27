import React from "react";

export const Title = ({ title }: { title: string }) => {
  return (
    <div style={{ height: "80px", display: "flex", alignItems: "center" }}>
      <span style={{ fontWeight: "700", fontSize: "24px" }}>{title}</span>
    </div>
  );
};
