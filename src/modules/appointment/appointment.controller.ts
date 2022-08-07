import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  Controller,
  DELETE,
  FastifyInstanceToken,
  GET,
  Inject,
  POST,
} from "fastify-decorators";
import { getLogger, Logger, LogLevel } from "../../log/logger";
import { getFormattedDate } from "../../utils/datetime";
import { CreateEventRequestType } from "../calendar/calendar";
import { CalendarService } from "../calendar/calendar.service";
import { CreateAppointmentInputType } from "./appointment";
import { CreateAppointmentInput } from "./appointment.schema";
import { AppointmentService } from "./appointment.service";

export type CreateAppointmentBody = FastifyRequest<{
  Body: CreateAppointmentInputType;
}>;

export type FindAppointmentParam = FastifyRequest<{
  Params: {
    appointmentId: number;
  };
}>;

@Controller({
  route: "/api/appointments",
})
export default class AppointmentController {
  @Inject(FastifyInstanceToken)
  private instance!: FastifyInstance;

  @Inject(AppointmentService)
  private _appointmentService!: AppointmentService;
  @Inject(CalendarService)
  private _calendarService!: CalendarService;

  private logger: Logger = getLogger();

  @GET("/", {})
  public async findAppointments() {
    const appointments = await this._appointmentService.findAppointments();
    return appointments;
  }

  @POST("/", {
    schema: { body: CreateAppointmentInput },
  })
  public async createAppointment(
    request: CreateAppointmentBody,
    reply: FastifyReply
  ) {
    const calendarId = this.instance.config.CALENDAR_ID;

    const { datetimeFrom, datetimeTo, userEmail, appointmentType, comments } =
      request.body;

    const isFree = await this._calendarService.checkFree(
      calendarId,
      datetimeFrom,
      datetimeTo
    );

    if (!isFree) {
      const logMessage = {
        calendarId,
        datetimeFrom,
        datetimeTo,
      };

      this.logger.message(`${JSON.stringify(logMessage)}`, LogLevel.INFO);
      return reply
        .code(400)
        .send(
          `Not available from ${getFormattedDate(
            datetimeFrom
          )} to ${getFormattedDate(datetimeTo)}`
        );
    }

    const eventInfo: CreateEventRequestType = {
      summary: "Appointment with " + userEmail,
      description: `Appointment Type: ${appointmentType}\nComments: ${
        comments !== null || comments !== undefined ? comments : "None"
      }`,
      start: {
        dateTime: datetimeFrom,
        timeZone: "America/Toronto",
      },
      end: {
        dateTime: datetimeTo,
        timeZone: "America/Toronto",
      },
    };

    const newEvent = await this._calendarService.insertEvent(
      calendarId,
      eventInfo
    );

    if (newEvent && newEvent.id) {
      try {
        const appointment = await this._appointmentService.createNewAppointment(
          request.body,
          newEvent.id
        );
        if (appointment) {
          return reply.code(201).send(appointment);
        }
      } catch (error: any) {
        this.logger.message(`${error.meta}`, LogLevel.ERROR);

        await this._calendarService.cancelEvent(calendarId, newEvent.id);
      }
    }

    return reply.code(400).send("Failed to create event");
  }

  @GET("/:appointmentId")
  public async findAppointment(
    request: FindAppointmentParam,
    reply: FastifyReply
  ) {
    const appointments = await this._appointmentService.findAppointment(
      Number(request.params.appointmentId)
    );
    return appointments;
  }

  @DELETE("/:appointmentId")
  public async cancelAppointment(
    request: FindAppointmentParam,
    reply: FastifyReply
  ) {
    const appointment = await this._appointmentService.cancelAppointment(
      Number(request.params.appointmentId)
    );
    if (appointment && appointment.message) {
      this.logger.message(
        `cancelAppointment Error - ${appointment.message}`,
        LogLevel.ERROR
      );
      return reply.code(400).send(appointment);
    }
    if (appointment && appointment.status === "CANCELLED") {
      const calendarId = this.instance.config.CALENDAR_ID;

      await this._calendarService.cancelEvent(
        calendarId,
        appointment.calendarEventId
      );
      return reply
        .code(204)
        .send({ message: "Successfully deleted the event" });
    }
  }
}
