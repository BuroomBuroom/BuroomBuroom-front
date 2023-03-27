import React from "react";

type Props = { children: React.ReactNode; bgColor?: string };

export const Layout = ({ children, bgColor }: Props) => {
  return (
    <div
      style={{ paddingTop: "70px", display: "flex", width: "100%", height: "calc(100% - 70px)", justifyContent: "center", backgroundColor: bgColor }}>
      <div style={{ width: "80%", height: "100%" }}>{children}</div>
    </div>
  );
};
