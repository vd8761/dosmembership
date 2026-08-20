import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const STANDARD_PRICE = process.env.NEXT_PUBLIC_STANDARD_PRICE !== undefined ? Number(process.env.NEXT_PUBLIC_STANDARD_PRICE) : 32000;
const PREMIUM_PRICE = process.env.NEXT_PUBLIC_PREMIUM_PRICE !== undefined ? Number(process.env.NEXT_PUBLIC_PREMIUM_PRICE) : 65000;
const GST_RATE = process.env.NEXT_PUBLIC_GST_RATE !== undefined ? Number(process.env.NEXT_PUBLIC_GST_RATE) : 0.18;

export async function POST(req) {
    try {
        const { name, email, phone, linkedin, tier } = await req.json();

        if (!name || !email || !phone || !tier) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        let basePrice = 0;
        if (tier === 'Standard Tier') {
            basePrice = STANDARD_PRICE;
        } else if (tier === 'Premium Tier') {
            basePrice = PREMIUM_PRICE;
        } else {
            return NextResponse.json({ error: 'Invalid tier selected' }, { status: 400 });
        }

        const totalAmount = Math.round(basePrice + (basePrice * GST_RATE));

        // Create JWT payload
        const payload = {
            name,
            email,
            phone, linkedin,
            tier,
            amount: totalAmount, // securely calculate amount on server
        };

        const secret = process.env.CROSS_DOMAIN_SECRET;
        if (!secret) {
            console.error("CROSS_DOMAIN_SECRET is missing from environment variables");
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        // Sign token valid for 30 minutes
        const token = jwt.sign(payload, secret, { expiresIn: '30m' });

        return NextResponse.json({ token, success: true });
    } catch (error) {
        console.error("Error initiating checkout:", error);
        return NextResponse.json({ error: 'Failed to initiate checkout' }, { status: 500 });
    }
}
