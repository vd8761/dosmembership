import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req) {
    try {
        const body = await req.json();
        const { amount } = body;

        if (!amount) {
            return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
        }

        const razorpay = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: amount, // amount in paise
            currency: 'INR',
            receipt: 'receipt_' + Math.random().toString(36).substring(2, 15),
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json(order);
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        return NextResponse.json({ error: 'Error creating order' }, { status: 500 });
    }
}
