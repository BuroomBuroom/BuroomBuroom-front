import { BookingType } from "../../components/shared/booking/props.type";
import { customAxios } from "../customAxios";

export const reservation = async ({ booking, token }: { booking: BookingType; token: string }) => {
  return (
    await customAxios.post(`/reservation`, {
      token: token,
      line: booking.routeNo,
      seatNo: booking.seatName,
      reservationDay: `${booking.date.getFullYear()}-${booking.date.getMonth()}-${booking.date.getDate()}`,
    })
  ).data;
};
