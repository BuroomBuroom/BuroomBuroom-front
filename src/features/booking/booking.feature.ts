import React from "react";
import { useMutation } from "react-query";
import { reservation } from "../../apis/booking";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { stepState } from "../../atoms/step/step.atom";

export const BookingFeature = () => {
  const navigate = useNavigate();
  const setStep = useSetRecoilState(stepState);

  const reserve = useMutation(reservation, {
    onSuccess(data) {
      alert(data.message);
      navigate("/timetable");
      setStep(1);
    },
  });

  return { reserve };
};
