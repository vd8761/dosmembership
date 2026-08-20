import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import Razorpay from 'razorpay';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req) {
    try {
        const body = await req.json();
        const {
            name,
            email,
            phone,
            linkedin,
            tier,
            amount,
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature
        } = body;

        if (!name || !email || !razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
            return NextResponse.json({ error: 'Missing required fields or payment verification data.' }, { status: 400, headers: corsHeaders });
        }

        // 1. Verify Razorpay Signature (Mathematical Proof)
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(razorpay_order_id + '|' + razorpay_payment_id)
            .digest('hex');

        if (expectedSignature !== razorpay_signature) {
            console.error('Invalid Razorpay signature mismatch.');
            return NextResponse.json({ error: 'Payment verification failed. Invalid signature.' }, { status: 400, headers: corsHeaders });
        }

        // 2. Double Confirm Status & Amount via Razorpay API
        const razorpay = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const payment = await razorpay.payments.fetch(razorpay_payment_id);
        
        if (payment.status !== 'captured' && payment.status !== 'authorized') {
            console.error('Payment not successfully captured. Status:', payment.status);
            return NextResponse.json({ error: 'Payment status is incomplete. Please contact support.' }, { status: 400, headers: corsHeaders });
        }

        if (Number(payment.amount) !== Number(amount)) {
            console.error(`Amount mismatch. Expected: ${amount}, Got: ${payment.amount}`);
            return NextResponse.json({ error: 'Payment amount mismatch. Potential fraud detected.' }, { status: 400, headers: corsHeaders });
        }

        // 3. Save to Database
        const query = `
            INSERT INTO enrollments (name, email, phone, linkedin, tier, amount, razorpay_payment_id, razorpay_order_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING id;
        `;
        const values = [name, email, phone, linkedin, tier, amount, razorpay_payment_id, razorpay_order_id];
        
        await pool.query(query, values);

        // 2. Send Email Notification
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || 'mail.sender.net',
                port: process.env.SMTP_PORT || 465,
                secure: process.env.SMTP_PORT == 465,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            // Email to Admin
            const adminMailOptions = {
                from: `"Descience Memberships" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
                to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
                subject: `New Enrollment: ${tier}`,
                text: `
A new enrollment was just completed!

Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
LinkedIn: ${linkedin}

Plan: ${tier}
Amount: ?${amount / 100}
Payment ID: ${razorpay_payment_id}
Order ID: ${razorpay_order_id}
                `,
            };

            // Email to Student
            const studentMailOptions = {
                from: `"Descience Memberships" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
                to: email,
                subject: `Enrollment Successful - Descience OS Club`,
                html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Enrollment Successful - Descience OS Club</title>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;700;800&display=swap');
    body { margin: 0; padding: 0; font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #F4F7F6; -webkit-font-smoothing: antialiased; }
    table { border-collapse: collapse; }
</style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #F4F7F6; -webkit-font-smoothing: antialiased;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F4F7F6; padding: 0;">
        <tr>
            <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; max-width: 90%; margin: 40px auto; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                    
                    <!-- Header with Gradient/Accent -->
                    <tr>
                        <td style="background-color: #07a97b; height: 6px; width: 100%;"></td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px 20px 15px 20px;">
                            <img src="https://descienceosclub.com/dos_logo.png" alt="Descience OS Club" width="160" style="display: block; max-width: 100%; height: auto; margin-bottom: 15px;">
                            <h1 style="color: #111827; margin: 0; font-family: 'Outfit', Helvetica, Arial, sans-serif; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Welcome to the Fellowship!</h1>
                        </td>
                    </tr>
                    
                    <!-- Body -->
                    <tr>
                        <td style="padding: 0 30px 15px 30px; color: #4B5563; line-height: 1.5;">
                            <p style="font-size: 15px; margin-top: 0; margin-bottom: 10px;">Hi <strong style="color: #111827;">${name}</strong>,</p>
                            <p style="font-size: 15px; margin-bottom: 15px;">Your enrollment in the <strong style="color: #07a97b;">${tier}</strong> has been successfully processed. We are thrilled to have you join our vibrant community of innovators and builders.</p>
                            
                            <!-- Premium Receipt Box -->
                            <div style="background-color: #F3F4F6; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid #07a97b; overflow: hidden;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td style="padding: 15px;">
                                            <p style="margin: 0 0 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6B7280; font-weight: 600;">Official Receipt</p>
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td style="padding-bottom: 6px; border-bottom: 1px solid #E5E7EB;">
                                                        <span style="color: #6B7280; font-size: 12px;">Payment ID</span><br>
                                                        <strong style="font-size: 14px; color: #111827; font-family: 'Courier New', monospace;">${razorpay_payment_id}</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 6px 0; border-bottom: 1px solid #E5E7EB;">
                                                        <span style="color: #6B7280; font-size: 12px;">Order ID</span><br>
                                                        <strong style="font-size: 14px; color: #111827; font-family: 'Courier New', monospace;">${razorpay_order_id}</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding-top: 6px;">
                                                        <span style="color: #6B7280; font-size: 12px;">Amount Paid</span><br>
                                                        <strong style="font-size: 18px; color: #07a97b; font-weight: 800;">?${amount / 100}</strong>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <p style="font-size: 15px; margin-bottom: 15px;">Our team will reach out to you shortly with your exclusive curriculum access and instructions on how to join the inner circles.</p>

                            <p style="font-size: 15px; margin: 0; color: #6B7280;">Stay inspired,<br><strong style="font-size: 16px; color: #111827; display: inline-block; margin-top: 4px; font-family: 'Outfit', Helvetica, Arial, sans-serif;">Team DOS Club</strong></p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td align="center" style="background-color: #F9FAFB; padding: 20px; color: #9CA3AF; font-size: 13px; border-top: 1px solid #F3F4F6;">
                            <p style="margin: 0 0 8px 0;">This is an automated receipt for your enrollment.</p>
                            <p style="margin: 0 0 12px 0;">Need help? Reach out to <a href="mailto:info@descienceosclub.com" style="color: #07a97b; text-decoration: none; font-weight: 500;">info@descienceosclub.com</a></p>
                            <p style="margin: 0;">&copy; ${new Date().getFullYear()} DOS Club. All rights reserved.</p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
                `,
            };

            await transporter.sendMail(adminMailOptions);
            await transporter.sendMail(studentMailOptions);
        } else {
            console.warn("SMTP credentials not configured. Email notification skipped.");
        }

        return NextResponse.json({ success: true, message: 'Enrollment saved successfully' }, { headers: corsHeaders });
    } catch (error) {
        console.error('Error saving enrollment:', error);
        return NextResponse.json({ error: 'Error processing enrollment' }, { status: 500, headers: corsHeaders });
    }
}
