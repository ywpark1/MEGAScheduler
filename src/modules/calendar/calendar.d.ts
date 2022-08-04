import { Static } from "@sinclair/typebox";
import {
  CreateEventRequest,
  Credentials,
  GetEventRequest,
} from "./calendar.schema";

type CredentialsType = Static<typeof Credentials>;

type GetEventRequestType = Static<typeof GetEventRequest>;

type CheckEventAvailable = GetEventRequestType;

type CreateEventRequestType = Static<typeof CreateEventRequest>;
