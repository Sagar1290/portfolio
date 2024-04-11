import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(Request) {
    if (Request.method === "POST") {
        const data = await Request.json();

        if (!data.name || !data.email || !data.message)
            return NextResponse.json({ message: "All Fields are Required" }, { status: 409 })

        try {
            const info = await transporter.sendMail({
                from: data.email,
                to: process.env.EMAIL,
                subject: "MESSAGE FROM PORTFOLIO WEBSITE",
                text: data.message,
                html: `<p>${data.message}</p>
                <p>
                    <b>contact info</b>
                </p> 
                <p>name: <em>${data.name}</em></p> 
                <p>email: <em>${data.email}</em></p>`,
            });
            console.log("Message sent: %s", info.messageId);
        } catch (error) {
            console.log(error)
            return NextResponse.json({ message: "Error Sending Message" }, { status: 404 })
        }
        return NextResponse.json({ message: "Message Sent Successfully" }, { status: 200 })
    }
    NextResponse.json({ message: "Bad Request!" }, { status: 404 })
}