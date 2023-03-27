import React from "react";
import * as S from "./Booking.style";
import { Title } from "../../components/shared/common/title/Title";
import { Step } from "./step/Step";
import { useRecoilState } from "recoil";
import { bookingStep } from "../../atoms/booking";

export const Booking = () => {
  const [step, setStep] = useRecoilState(bookingStep);

  return (
    <>
      <Title title="예약하기" />
      <S.BookingLayout>
        <Step step={step} />
        <div>
          <button onClick={() => setStep((prev) => prev + 1)}>plus</button>
        </div>
      </S.BookingLayout>
    </>
  );
};
