import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function getResend() {
    return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, message } = body;

        // Server-side validation
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        const resend = getResend();
        const { error } = await resend.emails.send({
            from: 'Simply Irrigation <onboarding@resend.dev>',
            to: 'simplyirrigationllc@gmail.com',
            replyTo: email,
            subject: `New Quote Request from ${firstName} ${lastName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send message. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
