import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";



// ===========================================================================

// // Get Api
export async function GET() {
    try {
        const data = await prisma.passenger.findMany()
        return NextResponse.json(data)
    } catch (error) {
        // -------------------------------------------------
        return NextResponse.json(
            { error: 'Failed to fetch users', details: error.message },
            { status: 500 }
        )
    }
}


// ===============================================================================
// POST API--
export async function POST(req) {

    try {
        const {
            pName,
            pEmail,
            pPhone,
            pAltPhone,
            pIdCard,
        } = await req.json();

        const passengerData = await prisma.passenger.create({
            data: {
                pName,
                pEmail,
                pPhone,
                pAltPhone,
                pIdCard,
            },
        });
        console.log("Received data:", pName, pEmail, pPhone, pAltPhone, pIdCard);


        return NextResponse.json(passengerData, { status: 201 });
    } catch (error) {
        // Log error internally for server-side tracking, without exposing details
        console.error("Error adding Passenger:", error);

        return NextResponse.json(
            { error: "Failed to add Passenger. Please try again later." },
            { status: 500 }
        );
    }
}
// _______________________________________________________________________________


// // ======================= DELETE  =======================
export async function DELETE(request) {

    const { id } = await request.json();

    await prisma.passenger.delete({
        where: { id },
    });

    return NextResponse.json(
        { message: "Passenger deleted successfully" },
        { status: 200 }
    );

}

// ======================= UPDATE  =======================
export async function PATCH(request) {
    try {
        const {
            id,
            busname,
            busNo,
            busFare,
            dprtrCity,
            arvlCity,
            dprtrTme,
        } =
            await request.json();


        const updatedUser = await prisma.passenger.update({
            where: { id },
            data: {
                busname,
                busNo,
                busFare,
                dprtrCity,
                arvlCity,
                dprtrTme,
            },
        });

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update user", details: error.message },
            { status: 500 }
        );
    }
}



