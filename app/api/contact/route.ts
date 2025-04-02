import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // IMPORTANT: Make sure the `form-name` matches the `name` attribute
    // of the form in your contact page component.
    const formName = 'contact'; // Should match <form name="contact" ...>

    // Prepare data in the format Netlify expects for form submissions
    // Needs to be URL-encoded
    const encodedData = new URLSearchParams({
      'form-name': formName,
      ...formData,
    }).toString();

    // Send the data to Netlify's endpoint
    // Netlify automatically provides the correct endpoint URL based on the site
    // We just need to POST to the root path ('/')
    const netlifyResponse = await fetch(process.env.URL || '/', { // Use site URL or fallback to root
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodedData,
    });

    if (netlifyResponse.ok) {
      // Successful submission to Netlify
      return NextResponse.json({ message: 'Form submitted successfully to Netlify!' }, { status: 200 });
    } else {
      // Netlify submission failed
      console.error('Netlify form submission failed:', netlifyResponse.status, netlifyResponse.statusText);
      const errorText = await netlifyResponse.text(); // Get potential error details from Netlify
      console.error('Netlify response body:', errorText);
      return NextResponse.json({ message: 'Failed to submit form to Netlify.' }, { status: netlifyResponse.status });
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ message: 'Internal Server Error processing form.' }, { status: 500 });
  }
} 