-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "genderId" INTEGER NOT NULL,
    "insuranceId" INTEGER NOT NULL,
    "insuranceNumber" INTEGER NOT NULL,
    CONSTRAINT "User_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "Gender" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_insuranceId_fkey" FOREIGN KEY ("insuranceId") REFERENCES "Insurance" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Gender" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gender" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Insurance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "insuranceName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Gender_gender_key" ON "Gender"("gender");

-- CreateIndex
CREATE UNIQUE INDEX "Insurance_insuranceName_key" ON "Insurance"("insuranceName");
