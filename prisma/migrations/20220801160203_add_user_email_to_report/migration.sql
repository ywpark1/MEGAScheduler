/*
  Warnings:

  - Added the required column `userEmail` to the `ReportUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReportUser" ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ReportUser" ADD CONSTRAINT "ReportUser_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
