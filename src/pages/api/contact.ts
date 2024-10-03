import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();



export default async function handler (req:NextApiRequest ,res:NextApiResponse){
    const {name,email,message} =req.body;
    const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"xashadulop@gmail.com",
            pass:process.env.GMAIL_PASS,        
        }
    });
    const mailOptions = {
        from: email,
        to: 'xashadulop@gmail.com', // Replace with your email
        subject: `🌟 New message from ${name}! 🌟`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2 style="color: #333;">You have a new message! 📧</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
                    ${message}
                </blockquote>
                <br/>
                <p style="color: #555;">Cheers,<br/>Your Website</p>
                <p style="font-size: 12px; color: #999;">This is an automated email, please do not reply.</p>
            </div>
        `,
    };
    
    try {
        await transport.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
        
    }

}