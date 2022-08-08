import { Inject, Service } from "fastify-decorators";
import { getDateFileName } from "../../utils/datetime";
import prisma from "../../utils/prisma";
import { AppointmentService } from "../appointment/appointment.service";

@Service()
export class ReportService {
  @Inject(AppointmentService)
  private _appointmentService!: AppointmentService;

  public async createReport(datetimeFrom: string, datetimeTo: string) {
    const appointments =
      await this._appointmentService.findAppointmentsWithDateFilter(
        datetimeFrom,
        datetimeTo
      );

    const appointmentGroup = appointments.reduce((group, appointment) => {
      const { userEmail } = appointment;
      group[userEmail] = group[userEmail] ?? [];
      group[userEmail].push(appointment);
      return group;
    }, {});

    let totalCompletedHours = 0;
    let totalCompletedAppointments = 0;
    let totalCancelledAppointments = 0;

    for (const [key, value] of Object.entries(appointmentGroup)) {
      console.log(`${key}: ${JSON.stringify(value)}`);

      const iterator = value.values();

      for (const statusValue of iterator) {
        if (statusValue.status == "COMPLETED") {
          totalCompletedHours += statusValue._sum.totalHours;
          totalCompletedAppointments += statusValue._count;
        } else if (statusValue.status == "CANCELLED") {
          totalCancelledAppointments += statusValue._count;
        }
      }
    }

    const fileName =
      getDateFileName(datetimeFrom) + "-" + getDateFileName(datetimeTo);

    const response = await prisma.report.create({
      data: {
        fileName,
        datetimeFrom,
        datetimeTo,
        totalUsers: Object.keys(appointmentGroup).length,
        totalHours: totalCompletedHours,
        totalAppointmentBooked: totalCompletedAppointments,
        totalAppointmentCancelled: totalCancelledAppointments,
      },
      select: {
        id: true,
      },
    });

    if (response && response.id) {
      for (const [key, value] of Object.entries(appointmentGroup)) {
        const iterator = value.values();

        let totalCompletedHours = 0;
        let totalCompletedAppointments = 0;
        let totalCancelledAppointments = 0;

        for (const statusValue of iterator) {
          if (statusValue.status == "COMPLETED") {
            totalCompletedHours += statusValue._sum.totalHours;
            totalCompletedAppointments += statusValue._count;
          } else if (statusValue.status == "CANCELLED") {
            totalCancelledAppointments += statusValue._count;
          }
        }
        await prisma.reportUser.create({
          data: {
            reportId: response.id,
            userEmail: key,
            totalHours: totalCompletedHours,
            appointmentBookedCount: totalCompletedAppointments,
            appointmentCancelledCount: totalCancelledAppointments,
          },
        });
      }
    }

    return response;
  }

  public async getReports() {
    return await prisma.report.findMany({
      select: {
        id: true,
        datetimeFrom: true,
        datetimeTo: true,
        totalUsers: true,
        totalHours: true,
        totalAppointmentBooked: true,
        totalAppointmentCancelled: true,
        reportUsers: {
          select: {
            userEmail: true,
            totalHours: true,
            appointmentBookedCount: true,
            appointmentCancelledCount: true,
          },
        },
      },
    });
  }

  public async getReport(id: string) {
    return await prisma.report.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        datetimeFrom: true,
        datetimeTo: true,
        totalUsers: true,
        totalHours: true,
        totalAppointmentBooked: true,
        totalAppointmentCancelled: true,
        reportUsers: {
          select: {
            userEmail: true,
            totalHours: true,
            appointmentBookedCount: true,
            appointmentCancelledCount: true,
          },
        },
      },
    });
  }

  public async deleteReport(id: string) {
    return await prisma.report.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
