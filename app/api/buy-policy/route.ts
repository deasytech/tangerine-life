import { sendQuotationEmail } from "@/lib/mail";
import { NextResponse } from "next/server";

const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      telephone,
      plans,
    } = body;

    if (!fullName || !email || !telephone || !plans) {
      return new NextResponse(
        JSON.stringify({
          message: "All fields are required",
        }),
        {
          status: 400,
        }
      );
    }

    await sendQuotationEmail(email, fullName, "Quote Request", { telephone, plans });

    return new NextResponse(
      JSON.stringify({
        message: "Success",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error)
    return new NextResponse("Error generating quote: " + error, {
      status: 500,
    });
  }
};

export { POST };
