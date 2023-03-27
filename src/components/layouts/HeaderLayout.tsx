import React from "react";
import { colors } from "../../constants/colors";

export const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        width: "100%",
        height: "70px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderBottom: "0.5px solid " + colors.BLACK_5,
      }}>
      <div style={{ width: "80%", display: "flex", gap: "4%" }}>{children}</div>
    </div>
  );
};
