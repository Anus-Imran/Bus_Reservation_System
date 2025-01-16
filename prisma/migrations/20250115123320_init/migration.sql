-- CreateTable
CREATE TABLE "Bus" (
    "id" TEXT NOT NULL,
    "busname" TEXT NOT NULL,
    "busNo" TEXT NOT NULL,
    "busFare" TEXT NOT NULL,
    "dprtrCity" TEXT NOT NULL,
    "arvlCity" TEXT NOT NULL,
    "dprtrTme" TEXT NOT NULL,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("id")
);
