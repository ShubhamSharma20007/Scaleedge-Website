import transporter from "@/utils/transpoter";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
    const { name, email, contact, query, message } = await request.json();
 
    try {
        if(!name || !email || !contact || !query) {
            return NextResponse.json({ success: false, message: "All fields are required" });
        }
        await transporter.sendMail({
            from: email,
            to: 'hredge.scaleedge@gmail.com',
            subject: "Query Mail",
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="background-color: #007BFF; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
                    <h2 style="color: #fff; margin: 0;">New Query Received</h2>
                </div>
                <div style="padding: 20px; border: 1px solid #ddd; border-top: none;">
                    <h3 style="color: #007BFF; margin-top: 0;">Contact Information</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Contact:</strong> ${contact}</p>
                    <h3 style="color: #007BFF;">Query Information</h3>
                    <p><strong>Query:</strong> ${query}</p>
                    ${message === undefined ? "" :  `<p><strong>Message:</strong> ${message}</p>`}
                </div>
                <div style="background-color: #f7f7f7; padding: 20px; border-radius: 0 0 10px 10px; border-top: 1px solid #ddd;">
                    <p style="font-size: 14px; color: #555;">Thank you for your attention.</p>
                </div>
            </div>
            `,
        });

        return NextResponse.json({ success: true, message: "Mail sent successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Email not sent", error: error.message });
    }
}
