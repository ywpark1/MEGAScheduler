import { Inject, Service } from "fastify-decorators";
import prisma from "../../utils/prisma";
import { AppointmentService } from "../appointment/appointment.service";

@Service()
export class ReportService {
  @Inject(AppointmentService)
  private _appointmentService!: AppointmentService;

  public async createReport(datetimeFrom: string, datetimeTo: string) {
    const appointments =
      this._appointmentService.findAppointmentsWithDateFilter(
        datetimeFrom,
        datetimeTo
      );

    return appointments;
  }
}
