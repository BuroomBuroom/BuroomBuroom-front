import React from "react";

type Props = { children: React.ReactNode };

export const BookingLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        rowGap: "3.125rem",
      }}>
      {children}
    </div>
  );
};
