import React, { useState } from "react";
import { RouteMap } from "../../components/shared/routeMap/RouteMap";

export const Timetable = () => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        marginTop: "50px",
      }}>
      <div
        style={{
          display: "flex",
          width: "80%",
          height: "100%",
          gap: "2%",
          marginBottom: "8%",
        }}>
        <RouteMap select={selected} setSelect={setSelected} idx={0} />
        <RouteMap select={selected} setSelect={setSelected} idx={1} />
      </div>
      <div style={{ display: "flex", width: "80%", height: "100%", gap: "2%" }}>
        <RouteMap select={selected} setSelect={setSelected} idx={2} />
        <RouteMap select={selected} setSelect={setSelected} idx={3} />
      </div>
    </div>
  );
};
