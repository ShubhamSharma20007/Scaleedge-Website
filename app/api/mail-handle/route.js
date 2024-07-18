import { NextResponse } from "next/server"
import transporter from "@/utils/transpoter";
export async function POST(request){
    const email =  await request.json()
try {
    
    await transporter.sendMail({
        from: email, 
        to: 'hredge.scaleedge@gmail.com',
        subject: "Query Mail",
  
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="background-color: #f7f7f7; padding: 20px; border-bottom: 2px solid #ccc;">
          <h3 style="color: #333;">Email:</h3>
          <p style="font-size: 16px; color: #555;">${email}</p>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 18px; color: #555;">I have a query for a web developer project.</p>
        </div>
        <div style="background-color: #f7f7f7; padding: 20px; border-top: 2px solid #ccc;">
          <p style="font-size: 14px; color: #999;">Thank you for your attention.</p>
        </div>
      </div>
        `,
      });
  
      return NextResponse.json({success:true,message:"mail send successfully"})
    
} catch (error) {
    return NextResponse.json({success:false,message: "Email not Sent",error: error.message})
}
  
}