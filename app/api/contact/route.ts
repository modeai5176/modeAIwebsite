import { NextRequest, NextResponse } from 'next/server'

// Email sending function
async function sendEmailNotification(data: {
  name: string
  email: string
  phone: string
  company: string
  service: string
  country: string
  message: string
}) {
  // For now, we'll use a simple console notification
  // In production, you'd use a service like SendGrid, Resend, or Nodemailer
  console.log('📧 EMAIL NOTIFICATION:')
  console.log('To: as.srivastava100@gmail.com')
  console.log('Subject: New Contact Form Submission')
  console.log('From:', data.email)
  console.log('Name:', data.name)
  console.log('Company:', data.company)
  console.log('Phone:', data.phone)
  console.log('Service:', data.service)
  console.log('Country:', data.country)
  console.log('Message:', data.message)
  console.log('📧 END EMAIL NOTIFICATION')
  
  // TODO: Replace with actual email service
  // Example with SendGrid:
  // await sgMail.send({
  //   to: 'as.srivastava100@gmail.com',
  //   from: 'noreply@yourdomain.com',
  //   subject: 'New Contact Form Submission',
  //   text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
  // })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, country, message } = body

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
        country,
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
      country,
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