-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN');

-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('NOT_STARTED', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "kakaoID" TEXT,
    "isBlacklisted" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "datetimeFrom" TIMESTAMP(3) NOT NULL,
    "datetimeTo" TIMESTAMP(3) NOT NULL,
    "userEmail" TEXT NOT NULL,
    "status" "AppointmentStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppointmentDetail" (
    "id" SERIAL NOT NULL,
    "appointmentId" INTEGER NOT NULL,
    "comments" TEXT,
    "appointmentType" TEXT NOT NULL,
    "paidAmount" DOUBLE PRECISION,
    "paidDate" TIMESTAMP(3),

    CONSTRAINT "AppointmentDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "datetimeFrom" TIMESTAMP(3) NOT NULL,
    "datetimeTo" TIMESTAMP(3) NOT NULL,
    "totalUsers" INTEGER NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "totalHours" DOUBLE PRECISION NOT NULL,
    "totalAppointmentBooked" INTEGER NOT NULL,
    "totalAppointmentCancelled" INTEGER NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportUser" (
    "reportId" INTEGER NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "totalHours" DOUBLE PRECISION NOT NULL,
    "appointmentBookedCount" INTEGER NOT NULL,
    "appointmentCancelledCount" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentDetail_appointmentId_key" ON "AppointmentDetail"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "ReportUser_reportId_key" ON "ReportUser"("reportId");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentDetail" ADD CONSTRAINT "AppointmentDetail_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportUser" ADD CONSTRAINT "ReportUser_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
