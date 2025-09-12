import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email sending function
async function sendEmailNotification(data: {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    CONTACT_TO,
  } = process.env

  // If SMTP env vars are missing, fallback to console logging (non-fatal)
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !CONTACT_TO) {
    console.warn('[contact] SMTP env vars missing - logging message instead of sending email')
    console.log('📧 EMAIL (FAKE SEND):', {
      to: CONTACT_TO || 'missing CONTACT_TO',
      from: SMTP_FROM || 'missing SMTP_FROM',
      subject: 'New Contact Form Submission',
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: data.service,
      message: data.message,
    })
    return
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // true for 465, false for 587/25
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  const subject = `New Contact Form Submission — ${data.name}`
  const text = `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || '-'}
Service: ${data.service || '-'}

Message:
${data.message}`

  const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#111">
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Phone:</strong> ${data.phone}</p>
  <p><strong>Company:</strong> ${data.company || '-'}</p>
  <p><strong>Service:</strong> ${data.service || '-'}</p>
  <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
</div>`

  await transporter.sendMail({
    from: SMTP_FROM,
    to: CONTACT_TO,
    subject,
    text,
    html,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email notification
    try {
      await sendEmailNotification({
        name,
        email,
        phone,
        company,
        service,
        message
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Continue with the response even if email fails
    }
    
    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
      source: 'contact-page'
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will contact you within 24 hours to schedule your free AI strategy call.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
} 