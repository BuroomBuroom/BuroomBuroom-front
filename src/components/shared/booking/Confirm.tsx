import React from "react";
import { BookingType } from "./props.type";
import styled from "styled-components";
import { Button } from "../common/button/Button";
import { BookingFeature } from "../../../features/booking/booking.feature";
import { AuthFeature } from "../../../features/auth/auth.feature";

type PropType = {
  booking: BookingType;
};

export const Confirm = (props: PropType) => {
  const { reserve } = BookingFeature();
  const { user } = AuthFeature();

  return (
    <>
      <ConfirmStyle>
        <span>
          {props.booking.date.getFullYear()}/{props.booking.date.getMonth()}/
          {props.booking.date.getDate()}
        </span>
        <span>|</span>
        <span>{props.booking.routeNo}호차</span>
        <span>|</span>
        <span>{props.booking.seatName}호석</span>
      </ConfirmStyle>
      <Button
        onClick={() => reserve.mutate({ booking: props.booking, token: user.token })}
        children="예약 확정하기"
      />
    </>
  );
};

const ConfirmStyle = styled.div`
  display: flex;
  height: 30vh;
  align-items: center;
  gap: 15px;
  span {
    font-weight: bold;
    font-size: larger;
  }
`;
