import React from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  return <div>this is Booking{serviceId}</div>;
};

export default Booking;
