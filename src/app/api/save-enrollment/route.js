import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        // body contains: name, email, phone, linkedin, tier, amount, razorpay_payment_id, etc.
        
        // TODO: Save to your NeonDB PostgreSQL database here
        
        return NextResponse.json({ success: true, message: "Enrollment saved" });
    } catch (error) {
        console.error("Save Enrollment Error:", error);
        return NextResponse.json({ error: "Failed to save enrollment" }, { status: 500 });
    }
}
