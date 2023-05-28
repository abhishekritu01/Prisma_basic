/*
  Warnings:

  - You are about to drop the column `preference` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `userPrefence` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userPrefenceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "userPrefence" DROP CONSTRAINT "userPrefence_UserId_fkey";

-- DropIndex
DROP INDEX "userPrefence_UserId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "preference",
ADD COLUMN     "userPrefenceId" TEXT;

-- AlterTable
ALTER TABLE "userPrefence" DROP COLUMN "UserId";

-- CreateIndex
CREATE UNIQUE INDEX "User_userPrefenceId_key" ON "User"("userPrefenceId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPrefenceId_fkey" FOREIGN KEY ("userPrefenceId") REFERENCES "userPrefence"("id") ON DELETE SET NULL ON UPDATE CASCADE;
