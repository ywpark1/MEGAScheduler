import { Service } from "fastify-decorators";
import fs from "fs";
import { JWT } from "google-auth-library";
import { google } from "googleapis";
import path from "path";
import {
  CheckEventAvailable,
  CreateEventRequestType,
  CredentialsType,
  GetEventRequestType,
} from "./calendar";

const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.readonly",
  "https://www.googleapis.com/auth/calendar.events",
  "https://www.googleapis.com/auth/calendar.events.readonly",
];

const CREDENTIAL_FILE_PATH = path.join(__dirname, "credentials.json");

@Service()
export class CalendarService {
  private _credentials!: CredentialsType;

  constructor() {
    fs.readFile(CREDENTIAL_FILE_PATH, (err, content) => {
      if (err) return console.log("Error loading client secret file:", err);

      this._credentials = JSON.parse(content.toString());
    });
  }

  public async getEvents(calendarId: string, timeMin: string, timeMax: string) {
    const getEventRequest: GetEventRequestType = {
      calendarId,
      timeMin,
      timeMax,
    };

    try {
      const auth = await this.authorize(this._credentials);
      return await this.getEventList(auth, getEventRequest);
    } catch (error: any) {
      console.log(error.code + " - " + error.response.data.error_description);
    }
  }

  /**
   * Lists the next 10 events on the user's primary calendar.
   * @param {google.auth.JWT} auth An authorized JWT service account client.
   */
  private async getEventList(auth: any, getEventRequest: GetEventRequestType) {
    const calendar = google.calendar({ version: "v3", auth });

    const response = await calendar.events.list({
      calendarId: getEventRequest.calendarId,
      timeMax: getEventRequest.timeMax,
      timeMin: getEventRequest.timeMin,
      maxResults: 10,
      timeZone: "America/Toronto",
    });

    const responseEvents = response.data.items;
    if (responseEvents && responseEvents.length) {
      console.log("Received events:");

      return responseEvents;
    }
  }

  public async insertEvent(
    calendarId: string,
    createEventRequest: CreateEventRequestType
  ) {
    try {
      const auth = await this.authorize(this._credentials);
      return await this.createEvent(auth, calendarId, createEventRequest);
    } catch (error: any) {
      console.log(error.code + " - " + error.response.data.error_description);
    }
  }

  private async createEvent(
    auth: any,
    calendarId: string,
    createEventRequest: CreateEventRequestType
  ) {
    const calendar = google.calendar({ version: "v3", auth });

    try {
      const response = await calendar.events.insert({
        calendarId,
        requestBody: {
          ...createEventRequest,
        },
      });

      if (response && response.data) {
        console.log("Event created: %s", response.data.htmlLink);
        return response.data;
      }
    } catch (error) {
      console.log(
        "There was an error contacting the Calendar service: " + error
      );
      return;
    }
  }

  /**
   * Create a JWT service account credentials with the given credentials,
   * and then execute the given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {Function} callback The callback to call with the authorized client.
   */
  private async authorize(credentials: CredentialsType) {
    const auth: JWT = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: SCOPES,
      keyId: credentials.private_key_id,
    });

    await auth.authorize();
    return auth;
  }

  public async checkFree(calendarId: string, timeMin: string, timeMax: string) {
    const checkEventAvailable: CheckEventAvailable = {
      calendarId,
      timeMin,
      timeMax,
    };

    try {
      const auth = await this.authorize(this._credentials);
      return await this.listFreeBusy(auth, checkEventAvailable);
    } catch (error: any) {
      console.log(error.code + " - " + error.response.data.error_description);
    }
  }

  private async listFreeBusy(
    auth: any,
    checkEventAvailable: CheckEventAvailable
  ) {
    const calendar = google.calendar({ version: "v3", auth });

    const queryBody = {
      timeMin: checkEventAvailable.timeMin,
      timeMax: checkEventAvailable.timeMax,
      items: [
        {
          id: checkEventAvailable.calendarId,
        },
      ],
    };

    const response = await calendar.freebusy.query({
      requestBody: queryBody,
    });

    if (response.data.calendars) {
      const calendarBusyCheck =
        response.data.calendars[checkEventAvailable.calendarId];

      return calendarBusyCheck.busy?.length == 0;
    }

    return true; // cannot book
  }

  public async cancelEvent(calendarId: string, eventId: string) {
    try {
      const auth = await this.authorize(this._credentials);
      return await this.deleteEvent(auth, calendarId, eventId);
    } catch (error: any) {
      console.log(error.code + " - " + error.response.data.error_description);
    }
  }

  private async deleteEvent(auth: any, calendarId: string, eventId: string) {
    const calendar = google.calendar({ version: "v3", auth });
    const response = await calendar.events.delete({
      calendarId,
      eventId,
    });
  }
}
