/*
  Warnings:

  - You are about to drop the column `selectedOptions` on the `Applicant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Applicant" DROP COLUMN "selectedOptions",
ADD COLUMN     "notifyEmail" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "notifyPhone" BOOLEAN NOT NULL DEFAULT false;
