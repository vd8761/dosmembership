import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import nodemailer from 'nodemailer';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

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
            razorpay_order_id
        } = body;

        if (!name || !email || !razorpay_payment_id) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Save to Database
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
                secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports (587)
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            const mailOptions = {
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
Amount: ₹${amount / 100}
Payment ID: ${razorpay_payment_id}
Order ID: ${razorpay_order_id}
                `,
            };

            await transporter.sendMail(mailOptions);
        } else {
            console.warn("SMTP credentials not configured. Email notification skipped.");
        }

        return NextResponse.json({ success: true, message: 'Enrollment saved successfully' });
    } catch (error) {
        console.error('Error saving enrollment:', error);
        return NextResponse.json({ error: 'Error processing enrollment' }, { status: 500 });
    }
}
