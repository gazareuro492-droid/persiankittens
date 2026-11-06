
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { kittens } from "@/data/kittens";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";

    const kittenId =
      typeof body.kittenId === "string" ? body.kittenId.trim() : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    const locale = body.locale === "fr" ? "fr" : "en";

    // Validate customer information.
    if (
      !name ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      phone.length > 30 ||
      message.length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please check your submitted information." },
        { status: 400 }
      );
    }

    // Verify the selected kitten against our server-side data.
    let selectedKitten = null;

    if (kittenId) {
      selectedKitten = kittens.find(
        (kitten) =>
          kitten.id === kittenId && kitten.available
      );

      if (!selectedKitten) {
        return NextResponse.json(
          { error: "This kitten is no longer available." },
          { status: 400 }
        );
      }
    }

    const subject = selectedKitten
      ? `New Kitten Inquiry - ${selectedKitten.name} (${selectedKitten.id})`
      : "New General Inquiry - Modern Kittens";

    const kittenDetails = selectedKitten
      ? `
Kitten ID: ${selectedKitten.id}
Kitten Name: ${selectedKitten.name}
Kitten Color: ${selectedKitten.color}
Kitten Age: ${selectedKitten.age}
Kitten Sex: ${selectedKitten.sex}
`
      : "No specific kitten selected.";

    const emailContent = `
NEW CUSTOMER INQUIRY
Modern Kittens

CUSTOMER DETAILS
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

KITTEN OF INTEREST
${kittenDetails}

CUSTOMER MESSAGE
${message}

Language: ${locale === "fr" ? "French" : "English"}
`;

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text: emailContent,
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Unable to send your inquiry." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry was submitted successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
