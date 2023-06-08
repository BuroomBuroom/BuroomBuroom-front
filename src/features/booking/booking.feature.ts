import React from "react";
import { useMutation } from "react-query";
import { reservation } from "../../apis/booking";

export const BookingFeature = () => {
  const reserve = useMutation(reservation, {
    onSuccess(data) {
      console.log(data);
    },
  });

  return { reserve };
};
