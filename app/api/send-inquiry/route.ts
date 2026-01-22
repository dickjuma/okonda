import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, projectType, message } = await req.json();

    // Validate input
    if (!name || !email || !phone || !projectType || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Email to company
    const companyMailOptions = {
      from: process.env.GMAIL_USER,
      to: 'dickjuma292@gmail.com',
      subject: `New Project Inquiry from ${name} - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f97316; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Project Inquiry</h2>
          </div>
          <div style="background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
            <p><strong>Client Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            
            <h3 style="color: #1f2937;">Project Details:</h3>
            <p style="white-space: pre-wrap; color: #4b5563;">${message}</p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            
            <p style="color: #6b7280; font-size: 12px;">
              This email was sent from your website contact form. 
              Please respond to the client directly to follow up on this inquiry.
            </p>
          </div>
        </div>
      `,
    };

    // Email to client
    const clientMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We Received Your Project Inquiry - BiLOR Engineering',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f97316; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">Thank You for Your Inquiry!</h2>
          </div>
          <div style="background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
            <p>Hello <strong>${name}</strong>,</p>
            
            <p>Thank you for reaching out to BiLOR Civil & Structural Engineering Design Ltd. We have successfully received your project inquiry for <strong>${projectType}</strong>.</p>
            
            <p>Our team will review your project details and contact you within 24 hours to discuss your requirements and provide you with a customized quote.</p>
            
            <div style="background-color: #fff; border-left: 4px solid #f97316; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #1f2937;"><strong>What to Expect:</strong></p>
              <ul style="margin: 10px 0 0 0; color: #4b5563;">
                <li>Initial consultation and requirements gathering</li>
                <li>Detailed project assessment</li>
                <li>Transparent pricing with no hidden costs</li>
                <li>Professional recommendations</li>
              </ul>
            </div>
            
            <p>If you have any urgent matters, feel free to contact us directly:</p>
            <p>
              <strong>Phone:</strong> 0799236234<br>
              <strong>Email:</strong> dickjuma292@gmail.com
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            
            <p style="color: #6b7280; font-size: 12px;">
              Best regards,<br>
              <strong>BiLOR CIVIL & STRUCTURAL ENGINEERING DESIGN LTD.</strong><br>
              Structurally sound, sustainably designed.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(clientMailOptions);

    return Response.json(
      { success: true, message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
