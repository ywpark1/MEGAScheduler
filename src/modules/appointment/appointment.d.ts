import { Static } from "@sinclair/typebox";
import { AppointmentCore, CreateAppointmentInput } from "./appointment.schema";

type CreateAppointmentInputType = Static<typeof CreateAppointmentInput>;
type AppointmentCoreType = Static<typeof AppointmentCore>;
