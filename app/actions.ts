'use server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  // 1. HONEYPOT CHECK
  // If the 'fax' field contains anything, it's a bot.
  const honeypot = formData.get('fax') as string;
  if (honeypot) {
    console.log("Bot detected and blocked by honeypot!");
    // Return a fake success so the bot stops trying
    return { success: true };
  }

  // 2. Process Legitimate Data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string || 'Not provided';
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: 'NeoNexus Contact <onboarding@resend.dev>',
      to: 'b.sharanabasava2006@gmail.com', // <-- Put your target email here!
      subject: `[Neo-Nexus 36.1] ${subject} from ${name}`,
      html: `
        <h2>New Message from Neo-Nexus 36.1 Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}