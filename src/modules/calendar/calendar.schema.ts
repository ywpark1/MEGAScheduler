import { Type } from "@sinclair/typebox";

const EventObj = Type.Object({
  id: Type.String(),
});

const Events = Type.Array(EventObj);

const timeSchema = Type.Object({
  dateTime: Type.String(),
  timeZone: Type.String(),
});

export const CreateEventRequest = Type.Object({
  summary: Type.String(),
  description: Type.String(),
  start: timeSchema,
  end: timeSchema,
});

export const eventsResponseSchema = {
  200: Events,
};

export const GetEventRequest = Type.Object({
  timeMin: Type.String(),
  timeMax: Type.String(),
  calendarId: Type.String(),
});

export const Credentials = Type.Object({
  client_email: Type.String({ format: "email" }),
  private_key: Type.String(),
  private_key_id: Type.String(),
});
