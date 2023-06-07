import React, { useState } from "react";
import { Button } from "../common/button/Button";
import { Props } from "./props.type";
import { RouteMap } from "../routeMap/RouteMap";

export const SelectRoute = (props: Props) => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
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
      <Button
        onClick={() => {
          window.scrollTo(0, 0);
          props.goNext({ bookingName: "routeNo", content: selected });
        }}
        children={`${selected}호차 선택하기`}
      />
    </>
  );
};
