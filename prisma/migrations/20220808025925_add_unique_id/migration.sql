-- DropIndex
DROP INDEX "ReportUser_reportId_key";

-- AlterTable
ALTER TABLE "ReportUser" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ReportUser_pkey" PRIMARY KEY ("id");
