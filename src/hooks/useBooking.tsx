import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { stepState } from "../atoms/step/step.atom";

export const useBooking = () => {
  const [step, setStep] = useRecoilState(stepState);
  const [booking, setBooking] = useState({});

  const goNext = (booking: { bookingName: string; content: number | string }) => {
    if (step > 3) {
      // 예약 완료 Func
    } else {
      setStep((s) => s + 1);
      setBooking((prev) => {
        return { ...prev, [booking.bookingName]: booking.content };
      });
    }
  };

  return { step, setStep, goNext };
};
