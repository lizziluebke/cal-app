export interface createAppointmentRequest{
  cardNumber: string
  startTime: string
  duration: string
  serviceId: string
}

export interface createAppointmentResponse{
  appointmentId: string
  customerId: string
  startTimestamp: string
  endTimestamp: string
}

export interface getAppointmentResponse{
  facilityId: string
  startDate: string
  endDate: string
  appointmentSlots: appointmentSlots;

}

export interface appointmentSlots {
  [day: string]: openDay[];
}

export interface openDay {
  numOpenSlots: number;
  startTimestamp: string;
}
