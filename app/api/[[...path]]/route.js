import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

// In-memory storage for demo purposes
const messages = []

export async function POST(request) {
  try {
    const { pathname } = new URL(request.url)
    
    // Contact form endpoint
    if (pathname === '/api/contact') {
      const body = await request.json()
      const { name, email, message } = body

      // Validate input
      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'All fields are required' },
          { status: 400 }
        )
      }

      // Store message
      const newMessage = {
        id: uuidv4(),
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      }

      messages.push(newMessage)

      return NextResponse.json(
        { 
          success: true, 
          message: 'Message received successfully',
          data: newMessage
        },
        { status: 200 }
      )
    }

    // Get all messages endpoint (for admin)
    if (pathname === '/api/messages' && request.method === 'GET') {
      return NextResponse.json(
        { messages },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { error: 'Endpoint not found' },
      { status: 404 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request) {
  try {
    const { pathname } = new URL(request.url)
    
    // Get all messages endpoint
    if (pathname === '/api/messages') {
      return NextResponse.json(
        { messages },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { error: 'Endpoint not found' },
      { status: 404 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
