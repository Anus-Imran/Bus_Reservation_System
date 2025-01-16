-- CreateTable
CREATE TABLE "Passenger" (
    "id" TEXT NOT NULL,
    "pName" TEXT NOT NULL,
    "pEmail" TEXT NOT NULL,
    "pPhone" TEXT NOT NULL,
    "pAltPhone" TEXT NOT NULL,
    "pIdCard" TEXT NOT NULL,

    CONSTRAINT "Passenger_pkey" PRIMARY KEY ("id")
);
