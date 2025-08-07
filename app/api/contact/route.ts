import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, businessType, message } = body

    // Validate required fields
    if (!name || !email || !businessType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email notification
    // 2. Store in CRM (HubSpot, Salesforce, etc.)
    // 3. Create calendar booking
    // 4. Send confirmation email
    
    // For now, we'll just log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      businessType,
      message,
      timestamp: new Date().toISOString(),
      source: 'ai-caller-landing'
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