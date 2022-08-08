import { Service } from "fastify-decorators";
import { AppointmentStatus } from "../../generated/client";
import { getAppointmentHours } from "../../utils/datetime";
import prisma from "../../utils/prisma";
import { CreateAppointmentInputType } from "./appointment";

@Service()
export class AppointmentService {
  public async findAppointments() {
    return prisma.appointment.findMany({
      select: {
        id: true,
        datetimeFrom: true,
        datetimeTo: true,
        user: {
          select: {
            email: true,
            phoneNumber: true,
            kakaoID: true,
          },
        },
        status: true,
        AppointmentDetail: {
          select: {
            comments: true,
            appointmentType: true,
          },
        },
      },
    });
  }

  public async findAppointmentsWithDateFilter(
    datetimeFrom: string,
    datetimeTo: string
  ) {
    return prisma.appointment.groupBy({
      by: ["userEmail", "status"],
      where: {
        datetimeFrom: {
          gte: datetimeFrom,
        },
        datetimeTo: {
          lte: datetimeTo,
        },
      },
      _count: true,
      _sum: {
        totalHours: true,
      },
    });
  }

  public async createNewAppointment(
    newAppointment: CreateAppointmentInputType,
    calendarEventId: string
  ) {
    const { datetimeFrom, datetimeTo, userEmail, ...rest } = newAppointment;
    const totalHours = getAppointmentHours(
      Date.parse(datetimeTo) - Date.parse(datetimeFrom)
    );
    const appointment = await prisma.appointment.create({
      data: {
        datetimeFrom,
        datetimeTo,
        calendarEventId,
        totalHours,
        user: {
          connect: {
            email: userEmail,
          },
        },
        AppointmentDetail: {
          create: {
            ...rest,
          },
        },
      },
      select: {
        datetimeFrom: true,
        datetimeTo: true,
        user: {
          select: {
            email: true,
            phoneNumber: true,
            kakaoID: true,
          },
        },
        status: true,
        AppointmentDetail: {
          select: {
            comments: true,
            appointmentType: true,
          },
        },
      },
    });

    return appointment;
  }

  public async findAppointment(id: number) {
    return await prisma.appointment.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        datetimeFrom: true,
        datetimeTo: true,
        user: {
          select: {
            email: true,
            phoneNumber: true,
            kakaoID: true,
          },
        },
        status: true,
        AppointmentDetail: {
          select: {
            comments: true,
            appointmentType: true,
          },
        },
      },
    });
  }

  public async updateAppointmentStatus(id: number, status: string) {
    return await prisma.appointment.update({
      where: {
        id,
      },
      data: {
        status: AppointmentStatus[status as keyof typeof AppointmentStatus],
      },
      select: {
        datetimeFrom: true,
        datetimeTo: true,
        totalHours: true,
        userEmail: true,
        status: true,
        AppointmentDetail: {
          select: {
            comments: true,
            appointmentType: true,
            paidAmount: true,
            paidDate: true,
          },
        },
      },
    });
  }

  public async cancelAppointment(id: number) {
    const appointment = await this.findAppointment(id);

    switch (appointment?.status) {
      case "CANCELLED":
        return {
          message: `Appointment ID ${id} not found`,
        };

      case "COMPLETED":
        return {
          message: `Appointment ID ${id} already completed`,
        };

      default:
        return await prisma.appointment.update({
          where: {
            id,
          },
          data: {
            status: "CANCELLED",
          },
          select: {
            id: true,
            datetimeFrom: true,
            datetimeTo: true,
            calendarEventId: true,
            user: {
              select: {
                email: true,
                phoneNumber: true,
                kakaoID: true,
              },
            },
            status: true,
            AppointmentDetail: {
              select: {
                comments: true,
                appointmentType: true,
              },
            },
          },
        });
    }
  }
}
