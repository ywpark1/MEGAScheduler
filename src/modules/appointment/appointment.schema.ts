import { Type } from "@sinclair/typebox";

export const AppointmentCore = Type.Object({
  datetimeFrom: Type.String({ format: "date-time" }),
  datetimeTo: Type.String({ format: "date-time" }),
  userEmail: Type.String({ format: "email" }),
});

export const AppointmentDetailCore = Type.Object({
  comments: Type.Optional(Type.String()),
  appointmentType: Type.String(),
});

export const CreateAppointmentInput = Type.Intersect([
  AppointmentCore,
  AppointmentDetailCore,
]);

export const AppointmentPaidCore = Type.Object({
  paidAmount: Type.Number(),
  paidDate: Type.String({ format: "date-time" }),
});

export const AppointmentStatus = Type.Object({
  status: Type.String(),
});

export const AppointmentPaidUpdate = Type.Intersect([
  AppointmentPaidCore,
  AppointmentStatus,
]);
