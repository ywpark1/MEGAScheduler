/*
  Warnings:

  - You are about to drop the column `paidAmount` on the `AppointmentDetail` table. All the data in the column will be lost.
  - You are about to drop the column `paidDate` on the `AppointmentDetail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AppointmentDetail" DROP COLUMN "paidAmount",
DROP COLUMN "paidDate";
