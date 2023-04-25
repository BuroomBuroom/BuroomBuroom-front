import React from "react";
import styled from "styled-components";
import { getNextFriday } from "../../../utils/common/date";
import { colors } from "../../../constants/colors";
import { Button } from "../common/button/Button";
import { Props } from "./props.type";

export const Start = (props: Props) => {
  const nextFriday = getNextFriday();

  return (
    <>
      <Bus src="/assets/bus.svg" />
      <Date>
        <DateContent>{nextFriday.getFullYear()}년</DateContent>
        <DateContent>{nextFriday.getMonth() + 1}월</DateContent>
        <DateContent>{nextFriday.getDate()}일</DateContent>
        <DateContent>금요일</DateContent>
        <DateContent>하교용 셔틀버스</DateContent>
      </Date>
      <Button
        onClick={() => props.goNext({ bookingName: "", content: "" })}
        children="예약하러 가기"
      />
    </>
  );
};

const Bus = styled.img`
  width: 30%;
  animation-name: "fadeInFromRight";
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

const Date = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

const DateContent = styled.span`
  background-color: ${colors.BLACK_1};
  padding: 1rem 1.5rem;
  border-radius: 2rem;
  font-weight: 700;
`;
