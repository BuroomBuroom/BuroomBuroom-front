import React, { useState } from "react";
import { Button } from "../common/button/Button";
import { Props } from "./props.type";

export const SelectRoute = (props: Props) => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <>
      <Button
        onClick={() => props.goNext({ bookingName: "routeNo", content: selected })}
        children="예약하러 가기"
      />
    </>
  );
};
