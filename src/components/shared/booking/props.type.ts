export type BookingType = {
  prev: string;
  date: Date;
  routeNo: number;
  seatName: string;
};

export interface Props {
  goNext: (booking: { bookingName: string; content: string | number | Date }) => void;
}
