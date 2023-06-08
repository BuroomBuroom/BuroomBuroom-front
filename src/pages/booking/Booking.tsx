import React, { useEffect } from "react";
import { Title } from "../../components/shared/common/title/Title";
import { Step } from "../../components/shared/step/Step";
import { useBooking } from "../../hooks/useBooking";
import { Start } from "../../components/shared/booking/Start";
import { BookingLayout } from "../../components/layouts/BookingLayout";
import { SelectRoute } from "../../components/shared/booking/SelectRoute";
import { SelectSeat } from "../../components/shared/booking/SelectSeat";
import { Confirm } from "../../components/shared/booking/Confirm";

export const Booking = () => {
  const { step, goNext, booking } = useBooking();

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "사이트를 새로고침하시겠습니까?\n변경사항이 저장되지 않을 수 있습니다.";
  };

  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();
  }, []);

  return (
    <>
      <Title title="셔틀버스 예약하기" />
      <BookingLayout>
        <Step step={step} />
        {step === 1 && <Start goNext={goNext} />}
        {step === 2 && <SelectRoute goNext={goNext} />}
        {step === 3 && <SelectSeat goNext={goNext} />}
        {step === 4 && <Confirm booking={booking} />}
      </BookingLayout>
    </>
  );
};
