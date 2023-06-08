import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { stepState } from "../atoms/step/step.atom";
import { BookingType } from "../components/shared/booking/props.type";

export const useBooking = () => {
  const [step, setStep] = useRecoilState(stepState);
  const [booking, setBooking] = useState<BookingType>({
    prev: "",
    date: new Date(),
    routeNo: 1,
    seatName: "",
  });

  const goNext = (book: { bookingName: string; content: string | number | Date }) => {
    if (step < 4) {
      setStep((s) => s + 1);
      setBooking((prev) => {
        return { ...prev, [book.bookingName]: book.content };
      });
    }
  };

  return { step, setStep, goNext, booking };
};
