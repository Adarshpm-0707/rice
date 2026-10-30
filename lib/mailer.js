import nodemailer from 'nodemailer';

export function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendContactEmail({ name, company, phone, email, productInterest, quantity, message }) {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"${process.env.CONTACT_FROM_NAME || 'AS Associates Website'}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL || 'info@asassociates.in',
    replyTo: email,
    subject: `New Bulk Inquiry from ${name}${company ? ` (${company})` : ''}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;">
        <div style="background:#14532d;padding:24px 32px;">
          <h1 style="color:#fdf8ee;margin:0;font-size:22px;">New Inquiry — AS Associates</h1>
        </div>
        <div style="padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b7280;width:160px;font-size:14px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Company</td><td style="padding:8px 0;">${company || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Product Interest</td><td style="padding:8px 0;">${productInterest || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Quantity</td><td style="padding:8px 0;">${quantity || '—'}</td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#f9fafb;border-radius:6px;border-left:4px solid #14532d;">
            <p style="margin:0 0 8px;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
            <p style="margin:0;line-height:1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#9ca3af;">Sent from the AS Associates website contact form.</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}
