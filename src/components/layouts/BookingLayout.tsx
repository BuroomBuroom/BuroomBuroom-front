import React from "react";

type Props = { children: React.ReactNode };

export const BookingLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "calc(90% - 80px)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      {children}
    </div>
  );
};
