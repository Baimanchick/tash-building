import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(`http://167.99.128.206/categories/3`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
