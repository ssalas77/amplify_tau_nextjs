-- CreateTable
CREATE TABLE "Applicant" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(64) NOT NULL,
    "street" VARCHAR(64) NOT NULL,
    "city" VARCHAR(32) NOT NULL,
    "state" VARCHAR(64) NOT NULL,
    "zip" VARCHAR(10) NOT NULL,
    "country" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(10) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "title" VARCHAR(64) NOT NULL,
    "role" VARCHAR(255) NOT NULL,
    "experience" VARCHAR(255) NOT NULL,
    "about" VARCHAR(500) NOT NULL,
    "filePath" TEXT NOT NULL,
    "selectedOptions" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_email_key" ON "Applicant"("email");
