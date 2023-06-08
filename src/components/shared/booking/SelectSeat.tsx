import React, { useEffect, useState } from "react";
import { Props } from "./props.type";
import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { Button } from "../common/button/Button";

type SeatType = {
  seatName: string;
  isLeft: boolean;
  isSelected: boolean;
}[];

const seatTitle = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

export const SelectSeat = (props: Props) => {
  let seat: SeatType = [];
  const [busSeat, setBusSeat] = useState<SeatType>();
  const [selected, setSelected] = useState<string>("A1");

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 10; j++) {
      seat[(i - 1) * 10 + j] = {
        seatName: seatTitle[j - 1] + i,
        isLeft: false,
        isSelected: false,
      };
    }
  }

  useEffect(() => {
    setBusSeat(seat);
  }, []);

  return (
    <>
      <SeatTable>
        <span></span>
        {seatTitle.map((s) => (
          <span>{s}</span>
        ))}
        {busSeat?.map((s, index) => (
          <>
            {index % 10 === 1 && <span>{Math.floor(index / 10 + 1)}</span>}
            <SeatBox
              onClick={() => setSelected(s.seatName)}
              key={s.seatName}
              isSelected={selected === s.seatName}
              isLeft={s.isLeft}
            />
          </>
        ))}
      </SeatTable>
      <Button
        onClick={() => {
          window.scrollTo(0, 0);
          props.goNext({ bookingName: "seatName", content: selected });
        }}
        children={`${selected}호석 선택하기`}
      />
    </>
  );
};

const SeatTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 4px;
  text-align: center;
  align-items: center;
`;

const SeatBox = styled.div<{ isLeft: boolean; isSelected: boolean }>`
  aspect-ratio: 1/1;
  width: 50px;
  background-color: ${(props) =>
    props.isLeft ? colors.RED_4 : props.isSelected ? colors.GREEN_4 : colors.BLACK_2};
`;
