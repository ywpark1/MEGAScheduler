import { Static } from "@sinclair/typebox";
import {
  AppointmentCore,
  AppointmentPaidCore,
  CreateAppointmentInput,
} from "./appointment.schema";

type CreateAppointmentInputType = Static<typeof CreateAppointmentInput>;
type AppointmentCoreType = Static<typeof AppointmentCore>;
type AppointmentPaidCoreType = Static<typeof AppointmentPaidCore>;
